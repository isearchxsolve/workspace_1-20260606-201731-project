// Graph class definition
class Graph {
  constructor(size) {
    this.size = size;
    this.adjacencyMatrix = Array(size).fill(0).map(() => Array(size).fill(Infinity));
  }

  addEdge(from, to, weight) {
    this.adjacencyMatrix[from][to] = weight;
    this.adjacencyMatrix[to][from] = weight;
  }
}
