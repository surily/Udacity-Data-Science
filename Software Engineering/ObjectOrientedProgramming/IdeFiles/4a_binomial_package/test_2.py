import unittest

from distributions import Gaussian
from distributions import Binomial

binomial = Binomial(0.4, 20)
binomial.plot_bar()
#binomial.pdf_histgram_plot()