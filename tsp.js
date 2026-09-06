const readline = require('readline').createInterface({ input: process.stdin, output: process.stdout });
const distances = [];
const cities = [];
let i = 0;
readline.question('Enter number of cities: ', (numCities) => {
  numCities = parseInt(numCities);
  readline.question('Enter distances between cities (space-separated): ', (distancesStr) => {
    distances = distancesStr.split(' ').map(Number);
    readline.question('Enter cities (space-separated): ', (citiesStr) => {
      cities = citiesStr.split(' ').map((city, index) => ({ name: city, distance: distances[index] }));
      const tsp = new TravellingSalesmanProblem(cities);
      const solution = tsp.solve();
      console.log('Solution:', solution);
      readline.close();
    });
  });
});

class TravellingSalesmanProblem {
  constructor(cities) {
    this.cities = cities;
  }

  solve() {
    const n = this.cities.length;
    const dp = Array(n).fill(null).map(() => Array(n).fill(Infinity));
    const path = Array(n).fill(null);
    dp[0][0] = 0;
    for (let i = 1; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (j === 0) {
          dp[i][j] = dp[i - 1][n - 1] + this.cities[i - 1].distance;
        } else {
          dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j]) + this.cities[i - 1].distance;
        }
      }
    }
    let minDistance = Infinity;
    let minPath = null;
    for (let i = 0; i < n; i++) {
      if (dp[n - 1][i] < minDistance) {
        minDistance = dp[n - 1][i];
        minPath = i;
      }
    }
    path[n - 1] = minPath;
    for (let i = n - 2; i >= 0; i--) {
      path[i] = (path[i + 1] + 1) % n;
    }
    return path;
  }
}