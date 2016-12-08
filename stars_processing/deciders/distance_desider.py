'''
Created on Oct 1, 2016

@author: Martin Vo
'''


import numpy as np

from stars_processing.deciders.base_decider import BaseDesider

class DistanceDesider(BaseDesider):
    
    def __init__(self, border, treshold = 0.5):
        """
        Parameters:
        -----------
            border : float, int
                Dissimilarity border distance from (0, 0, .. , n) where n is coordinates
                dimension and this coordinate correspond to 0 dissimilarity
            
            treshold : float
                Probability (1.0  means 100 %) level. All objects with probability of
                membership to the group higher then the treshold are considered
                as members.
        """
        self.treshold = treshold
        self.border = border
    
    def learn( self, *args, **kwargs ):
        """
        Nothing to learn
        """
        pass
        
    def evaluate( self, star_coords ): 
        """
        Parameters:
        -----------
            star_coords : list
                Coordinates of inspected star got from subfilters
                
        Returns:
        --------
            Probability that inspected star belongs to the searched group of objects
        """
        
        if np.sqrt( sum([ num**2 for num in star_coords ]))< self.border:
            return 1
        return 0