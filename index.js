import networkx as nx

g = nx.Graph()

# Define a function to solve the TSP
def solve_tsp(graph):
    # Use the nearest neighbor algorithm for simplicity
    def nearest_neighbor(graph, start_node):
        visited = set()
        path = [start_node]
        current_node = start_node
        while len(visited) < len(graph.nodes):
            neighbors = list(graph.neighbors(current_node))
            next_node = min(neighbors, key=lambda node: graph[node][current_node])
            visited.add(current_node)
            path.append(next_node)
            current_node = next_node
        return path

    # Generate a random graph for demonstration purposes
    import random
    num_nodes = 10
    for i in range(num_nodes):
        for j in range(i+1, num_nodes):
            if random.random() < 0.5:
                graph.add_edge(i, j, weight=random.random())

    # Find the shortest path using the nearest neighbor algorithm
    start_node = 0
    path = nearest_neighbor(graph, start_node)
    print(path)

    # Use NetworkX to find the shortest path
    shortest_path = nx.shortest_path(graph, source=start_node, target=max(path))
    print(shortest_path)

# Call the solve_tsp function
solve_tsp(g)