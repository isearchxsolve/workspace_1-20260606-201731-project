import unittest
from app import travelling_salesman_problem

class TestTravellingSalesmanProblem(unittest.TestCase):
    def test_travelling_salesman_problem(self):
        graph = {
            'A': {'B': 1, 'C': 3},
            'B': {'A': 1, 'C': 2},
            'C': {'A': 3, 'B': 2}
        }
        self.assertEqual(travelling_salesman_problem(graph), ['A', 'B', 'C', 'A'])

if __name__ == '__main__':
    unittest.main()