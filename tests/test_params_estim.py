'''
Created on Jan 25, 2017

@author: martin
'''
import unittest
import numpy as np

from stars_processing.deciders.supervised_deciders import QDADec
from stars_processing.tools.params_estim import ParamsEstimator
from stars_processing.descriptors.abbe_value_descr import AbbeValueDescr
from conf import deciders_settings
from entities.star import Star
from matplotlib import pyplot
from stars_processing.tools.visualization import plotProbabSpace
from stars_processing.descriptors.variogram_slope_descr import VariogramSlopeDescr


class Test(unittest.TestCase):

    def setUp(self):
        N = 50

        x = np.linspace(0, 10, 100)

        self.variables = []
        for ii in range(N):
            st = Star(name="VariableStar%i" % ii)
            st.putLightCurve([x, np.sin(x) + np.random.normal(x) * 0.1])
            self.variables.append(st)

        self.noisy = []
        for ii in range(N):
            st = Star(name="VariableStar%i" % ii)
            st.putLightCurve([x, np.random.normal(x) * 2])
            self.noisy.append(st)

    def tearDown(self):
        pass

    def testName(self):
        deciders = [QDADec]
        descriptors = [AbbeValueDescr, VariogramSlopeDescr]
        static_params = {"AbbeValueDescr": {"bins": 100}}
        tuned_params = [{"VariogramSlopeDescr": {"variogram_days_bin": 1}},
                        {"VariogramSlopeDescr": {"variogram_days_bin": 0.1}},
                        {"VariogramSlopeDescr": {"variogram_days_bin": 5}},
                        {"VariogramSlopeDescr": {"variogram_days_bin": 0.01}}]

        est = ParamsEstimator(self.variables, self.noisy, descriptors, deciders,
                              tuned_params, static_params=static_params)

        save_params = {"roc_plot_path": ".",
                       "roc_plot_name": "roc_curve",
                       "roc_data_path": ".",
                       "roc_data_name": "roc_data",
                       "stats_path": ".",
                       "stats_name": "stats.dat"}

        star_filter, stat, best_params = est.fit(
            deciders_settings.PRECISION, save_params=save_params)
        plotProbabSpace(
            star_filter, [0.01, 0.07], N=100)

if __name__ == "__main__":
    #import sys;sys.argv = ['', 'Test.testName']
    unittest.main()
