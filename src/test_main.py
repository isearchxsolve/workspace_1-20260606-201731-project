import pytest
  from src.main import tsp_solver

  def test_tsp_solver_small_graph():
    G = nx.Graph()
    G.add_node('A', distance=0)
    G.add_node('B', distance=10)
    G.add_edge('A', 'B', weight=5)
    assert tsp_solver(G, 'A') == ['A', 'B']

  def test_tsp_solver_medium_graph():
    G = nx.Graph()
    G.add_node('A', distance=0)
    G.add_node('B', distance=10)
    G.add_node('C', distance=15)
    G.add_edge('A', 'B', weight=5)
    G.add_edge('A', 'C', weight=10)
    G.add_edge('B', 'C', weight=7)
    assert tsp_solver(G, 'A') == ['A', 'B', 'C']

  def test_tsp_solver_large_graph():
    # This test would need a larger graph to be meaningful
    pass

  def test_tsp_solver_invalid_start_node():
    G = nx.Graph()
    G.add_node('A', distance=0)
    G.add_node('B', distance=10)
    G.add_edge('A', 'B', weight=5)
    with pytest.raises(KeyError):
      tsp_solver(G, 'C')
