import sys, os; sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))
import unittest
from tsp_report import tsp_report

class TestTSPReport(unittest.TestCase):
    def test_report_content(self):
        report = tsp_report()
        self.assertIn('Traveling Salesman Problem', report)
        self.assertIn('Brute Force', report)
        self.assertIn('Dynamic Programming', report)
        self.assertIn('Approximation Algorithms', report)

if __name__ == '__main__':
    unittest.main()