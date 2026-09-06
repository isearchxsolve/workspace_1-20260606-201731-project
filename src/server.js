// Server setup
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/tsp', (req, res) => {
  const graph = new Graph(5);
  graph.addEdge(0, 1, 10);
  graph.addEdge(0, 2, 15);
  graph.addEdge(1, 2, 35);
  graph.addEdge(2, 3, 25);
  graph.addEdge(3, 4, 10);
  const tsp = new TSP(graph);
  const tour = tsp.calculateTour();
  res.json(tour);
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
