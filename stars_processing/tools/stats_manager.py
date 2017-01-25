import os

import numpy as np
from matplotlib import pyplot as plt

from data_manager.status_resolver import StatusResolver


class StatsManager(object):
    '''
    Attributes
    ----------
    stats : list
        List of dictionaries. They consists of statistical values.
        Or at least with "false_positive_rate" and "true_positive_rate"
        in order to work properly.
    '''

    def __init__(self, stats):
        '''
        Parameters
        ----------
        stats : list
            List of dictionaries. They consists of statistical values.
            Or at least with "false_positive_rate" and "true_positive_rate"
            in order to work properly.
        '''

        self.stats = stats

    def getROC(self):
        """
        Get ROC curve

        Returns
        -------
        list
            List of fp values and tp values values
        """
        x = [0]
        y = [0]
        for stat in self.stats:
            x.append(stat.get("false_positive_rate"))
            y.append(stat.get("true_positive_rate"))
        x.append(1)
        y.append(1)
        sort_map = np.argsort(x)
        return [np.array(x)[sort_map], np.array(y)[sort_map]]

    def saveROCfile(self, path, file_name="roc_curve.dat", delim=None):
        """
        Save ROC data into the file

        Parameters
        ----------
        path : str
            Path to the output file location

        file_name : str
            Name of the file

        delim : str
            Delimiter of columns

        Returns
        -------
            None
        """
        if not delim:
            delim = "\t"
        roc = np.array(self.getROC()).T
        with open(os.path.join(path, file_name), 'w') as f:
            f.write('#fp%stp\n' % delim)
            np.savetxt(f, roc, fmt='%.2f', delimiter=delim)

    def plotROC(self, save=False, title="ROC curve", path=".",
                file_name="roc_plot.png"):
        """
        Plot ROC and show it or save it

        Parameters
        ----------
        save : bool
            If True plot is saved into the file

        title : str
            Title of the plot

        path : str
            Path to the output file location

        file_name : str
            Name of the file

        Returns
        -------
            None
        """
        roc = self.getROC()
        plt.plot(roc[0], roc[1], "b-", linewidth=2)
        plt.plot([0, 1], [0, 1], "r--")
        plt.title(title)
        plt.xlabel("False positive rate")
        plt.ylabel("True positive rate")

        if not save:
            plt.show()
        else:
            plt.savefig(os.path.join(path, file_name))
        plt.clf()

    def saveStats(self, path=".", file_name="stats.dat", delim=None, overwrite=True):
        """
        Save stats file into the file

        Parameters
        ----------
        path : str
            Path to the output file location

        file_name : str
            Name of the file

        delim : str
            Delimiter of columns

        overwrite : bool
            Overwrite file if it exists

        Returns
        -------
            None
        """
        if not delim:
            delim = "\t"
        StatusResolver.save_query(
            self.stats, file_name, path, delim, overwrite)