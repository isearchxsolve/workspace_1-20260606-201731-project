import pytest
from tsp import tsp

def test_tsp_small_graph():
    graph = np.array([[0, 10], [10, 0]])
    assert tsp(graph) == 0

def test_tsp_large_graph():
    graph = np.array([[0, 10, 15, 20], [10, 0, 35, 25], [15, 35, 0, 30], [20, 25, 30, 0]])
    assert tsp(graph) == 65

def test_tsp_invalid_graph():
    graph = np.array([[0, 10, 15], [10, 0, 35], [15, 35, 0]])
    with pytest.raises(ValueError):
        tsp(graph)

if __name__ == "__main__":
    pytest.main([__file__])