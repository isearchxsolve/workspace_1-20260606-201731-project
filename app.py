import networkx as nx
import numpy as np

def travelling_salesman_problem(graph):
    # The graph is assumed to be a dictionary where each key is a node and its value is a list of neighboring nodes
    # The edge weights are assumed to be the distances between the nodes
    n = len(graph)
    # Initialize the current node to any node in the graph
    current_node = list(graph.keys())[0]
    # Initialize the visited nodes set with the current node
    visited = {current_node}
    # Initialize the path with the current node
    path = [current_node]

    while len(visited) < n:
        # Get the neighbors of the current node that have not been visited yet
        neighbors = [node for node in graph[current_node] if node not in visited]
        # Get the unvisited neighbor with the minimum edge weight
        next_node = min(neighbors, key=lambda node: graph[current_node][node])
        # Add the next node to the path and mark it as visited
        path.append(next_node)
        visited.add(next_node)
        # Update the current node
        current_node = next_node

    # Close the path by adding the first node again
    path.append(list(graph.keys())[0])
    return path

# Example usage
graph = {
    'A': {'B': 1, 'C': 3},
    'B': {'A': 1, 'C': 2},
    'C': {'A': 3, 'B': 2}
}
print(app.travelling_salesman_problem(graph))