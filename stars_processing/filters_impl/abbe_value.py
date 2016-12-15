'''
Created on Mar 20, 2016

@author: Martin Vo
'''

from utils.commons import returns, accepts
from stars_processing.filters_tools.base_filter import BaseFilter, Learnable

from utils.data_analysis import to_ekvi_PAA, abbe


class AbbeValueFilter(BaseFilter, Learnable):

    '''
    Filter implementation which denies stars with lower value then a limit
    of Abbe value
    '''
    def __init__(self, bins=None, decider=None, plot_save_path=None,
                 plot_save_name=None, *args, **kwargs):
        '''
        '''
        self.bins = bins
        self.decider = decider

        self.plot_save_path = plot_save_path
        self.plot_save_name = plot_save_name

    @accepts(list)
    @returns(list)
    def applyFilter(self, stars):
        '''
        Filter stars according to Abbe values

        @param stars: List of star objects (containing light curves)

        @return: List of star-like objects passed thru filtering
        '''

        abbe_values = self.getSpaceCoords(stars)
        return [ star for star, passed in zip( stars, self.decider.filter( abbe_values )) if passed]


    def getSpaceCoords(self, stars):
        """
        Get list of Abbe values

        Parameters:
        -----------
            stars : list of Star objects
                Stars with color magnitudes in their 'more' attribute

        Returns:
        -------
            List of list of floats
        """
        abbe_values = []

        for star in stars:
            if not self.bins:
                bins = len(star.lightCurve.time)
            else:
                bins = self.bins
            abbe_values.append([star.lightCurve.getAbbe(bins=bins)])

        return abbe_values
