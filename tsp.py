import numpy as np
from scipy.optimize import linear_sum_assignment
import pytest

def tsp(graph):
    # Use the Hungarian algorithm to find the optimal assignment
    row_ind, col_ind = linear_sum_assignment(graph)
    return np.sum(graph[row_ind, col_ind])

def test_tsp():
    # Test the tsp function with a sample graph
    graph = np.array([[0, 10, 15, 20], [10, 0, 35, 25], [15, 35, 0, 30], [20, 25, 30, 0]])
    assert tsp(graph) == 65

if __name__ == "__main__":
    import sys
    graph = np.array([[0, 10, 15, 20], [10, 0, 35, 25], [15, 35, 0, 30], [20, 25, 30, 0]])
    print(tsp(graph))
