const { solveTSP } = require('./tspSolver');

const points = [[0, 0], [1, 2], [3, 1], [4, 4]];
const order = solveTSP(points);
console.log('Order of points to visit:', order);