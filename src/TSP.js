// TSP class definition
class TSP {
  constructor(graph) {
    this.graph = graph;
  }

  calculateTour() {
    // Nearest Neighbor algorithm implementation
    const tour = [0];
    let currentCity = 0;
    while (tour.length < this.graph.length) {
      let nearestCity = null;
      let minDistance = Infinity;
      for (let i = 0; i < this.graph.length; i++) {
        if (i !== currentCity && this.graph[currentCity][i] < minDistance) {
          nearestCity = i;
          minDistance = this.graph[currentCity][i];
        }
      }
      tour.push(nearestCity);
      currentCity = nearestCity;
    }
    return tour;
  }
}
