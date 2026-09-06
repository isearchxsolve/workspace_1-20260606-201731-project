import unittest
from src.main import TravelingSalesman

class TestTravelingSalesman(unittest.TestCase):
    def test_calculate_distance(self):
        tsp = TravelingSalesman([0, 1, 2])
        self.assertEqual(tsp.calculate_distance([0, 1, 2]), 2)

    def test_solve(self):
        tsp = TravelingSalesman([0, 1, 2, 3])
        best_path, min_distance = tsp.solve()
        self.assertEqual(best_path, (0, 1, 2, 3))  # Assuming this is the best path

if __name__ == '__main__':
    unittest.main()