'''
Created on Mar 23, 2016

@author: Martin Vo
'''

from __future__ import division

import numpy as np
from utils.data_analysis import to_PAA, normalize


class SAX(object):
    """
    This class manages symbolic representation of data series via
    Symbolic Aggregate approXimation method.  It translates
    series of data to a words, which can then be compared with other
    such words in symbolic distance space.
    """

    MIN_ALPH_SIZE = 3
    MAX_ALPH_SIZE = 20

    A_OFFSET = ord('a')

    def __init__(self, word_size=8, alphabet_size=10, scaling_factor=1):
        """
        Parameters:
        -----------
            word_size : int
                Number of letters in transformed word

            alphabet_size : int
                Size of alphabet counted from A (3 means A, B, C)
        """
        if alphabet_size < self.MIN_ALPH_SIZE or alphabet_size > self.MAX_ALPH_SIZE:
            raise DictionarySizeIsNotSupported("%i " % alphabet_size)

        self.word_size = word_size
        self.alphabet_size = alphabet_size
        self.breakpoints = self._getBreakpoints()
        self.beta = self.breakpoints[str(self.alphabet_size)]
        self.build_letter_compare_dict()
        self.scaling_factor = scaling_factor

    def to_letter_rep(self, x):
        """
        Function takes a series of data, x, and transforms it
        to a string representation.
        """
        paaX, indices = to_PAA(normalize(x), self.word_size)
        self.scaling_factor = np.sqrt(len(x) / self.word_size)
        return self.alphabetize(paaX), indices

    def alphabetize(self, paaX):
        """
        Converts the Piecewise Aggregate Approximation of x to a series of letters.
        """
        alphabetizedX = ''
        for i in range(0, len(paaX)):
            letterFound = False
            for j in range(0, len(self.beta)):
                if paaX[i] < self.beta[j]:
                    alphabetizedX += chr(self.A_OFFSET + j)
                    letterFound = True
                    break
            if not letterFound:
                alphabetizedX += chr(self.A_OFFSET + len(self.beta))
        return alphabetizedX

    def compare_strings(self, sA, sB):
        """
        Compares two strings based on individual letter distances.
        """
        if len(sA) != len(sB):
            raise Exception("StringsAreDifferentLength")
        list_letters_a = [x for x in sA]
        list_letters_b = [x for x in sB]
        mindist = 0.0
        for i in range(0, len(list_letters_a)):
            mindist += self.compare_letters(
                list_letters_a[i], list_letters_b[i])**2
        mindist = self.scaling_factor * np.sqrt(mindist)
        return mindist

    def compare_letters(self, la, lb):
        """
        Compare two letters based on letter distance return distance between
        """
        return self.compare_dict[la + lb]

    def build_letter_compare_dict(self):
        """
        Builds up the lookup table to determine numeric distance between two letters
        given an alphabet size.
        """
        number_rep = range(0, self.alphabet_size)
        letters = [chr(x + self.A_OFFSET) for x in number_rep]
        self.compare_dict = {}
        for i in range(0, len(letters)):
            for j in range(0, len(letters)):
                if np.abs(number_rep[i] - number_rep[j]) <= 1:
                    self.compare_dict[letters[i] + letters[j]] = 0
                else:
                    high_num = np.max([number_rep[i], number_rep[j]]) - 1
                    low_num = np.min([number_rep[i], number_rep[j]])
                    self.compare_dict[
                        letters[i] + letters[j]] = self.beta[high_num] - self.beta[low_num]

    def sliding_window(self, x, windowSize, overlappingFraction=None):

        self.windowSize = windowSize
        if not overlappingFraction:
            overlappingFraction = 0.01
        overlap = self.windowSize * overlappingFraction
        moveSize = int(self.windowSize - overlap)
        if moveSize < 1:
            raise OverlapSpecifiedIsNotSmallerThanWindowSize
            moveSize = 5
        ptr = 0
        n = len(x)
        windowIndices = []
        stringRep = []
        while ptr < n - self.windowSize + 1:
            thisSubRange = x[ptr:ptr + self.windowSize]
            (thisStringRep, indices) = self.to_letter_rep(thisSubRange)
            stringRep.append(thisStringRep)
            windowIndices.append((ptr, ptr + self.windowSize))
            ptr += moveSize
        return (stringRep, windowIndices)

    def batch_compare(self, xStrings, refString):
        return [self.compare_strings(x, refString) for x in xStrings]

    def setScalingFactor(self, scalingFactor):
        self.scaling_factor = scalingFactor

    def set_window_size(self, windowSize):
        self.windowSize = windowSize

    def _getBreakpoints(self):
        return {'3': [-0.43, 0.43],
                '4': [-0.67, 0, 0.67],
                '5': [-0.84, -0.25, 0.25, 0.84],
                '6': [-0.97, -0.43, 0, 0.43, 0.97],
                '7': [-1.07, -0.57, -0.18, 0.18, 0.57, 1.07],
                '8': [-1.15, -0.67, -0.32, 0, 0.32, 0.67, 1.15],
                '9': [-1.22, -0.76, -0.43, -0.14, 0.14, 0.43, 0.76, 1.22],
                '10': [-1.28, -0.84, -0.52, -0.25, 0, 0.25, 0.52, 0.84, 1.28],
                '11': [-1.34, -0.91, -0.6, -0.35, -0.11, 0.11, 0.35, 0.6, 0.91, 1.34],
                '12': [-1.38, -0.97, -0.67, -0.43, -0.21, 0, 0.21, 0.43, 0.67, 0.97, 1.38],
                '13': [-1.43, -1.02, -0.74, -0.5, -0.29, -0.1, 0.1, 0.29, 0.5, 0.74, 1.02, 1.43],
                '14': [-1.47, -1.07, -0.79, -0.57, -0.37, -0.18, 0, 0.18, 0.37, 0.57, 0.79, 1.07, 1.47],
                '15': [-1.5, -1.11, -0.84, -0.62, -0.43, -0.25, -0.08, 0.08, 0.25, 0.43, 0.62, 0.84, 1.11, 1.5],
                '16': [-1.53, -1.15, -0.89, -0.67, -0.49, -0.32, -0.16, 0, 0.16, 0.32, 0.49, 0.67, 0.89, 1.15, 1.53],
                '17': [-1.56, -1.19, -0.93, -0.72, -0.54, -0.38, -0.22, -0.07, 0.07, 0.22, 0.38, 0.54, 0.72, 0.93, 1.19, 1.56],
                '18': [-1.59, -1.22, -0.97, -0.76, -0.59, -0.43, -0.28, -0.14, 0, 0.14, 0.28, 0.43, 0.59, 0.76, 0.97, 1.22, 1.59],
                '19': [-1.62, -1.25, -1, -0.8, -0.63, -0.48, -0.34, -0.2, -0.07, 0.07, 0.2, 0.34, 0.48, 0.63, 0.8, 1, 1.25, 1.62],
                '20': [-1.64, -1.28, -1.04, -0.84, -0.67, -0.52, -0.39, -0.25, -0.13, 0, 0.13, 0.25, 0.39, 0.52, 0.67, 0.84, 1.04, 1.28, 1.64]
                }


class DictionarySizeIsNotSupported(ValueError):
    pass


class OverlapSpecifiedIsNotSmallerThanWindowSize(ValueError):
    pass
