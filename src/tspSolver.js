const _ = require('lodash');

/**
 * Solves the Travelling Salesman Problem using a heuristic approach.
 * This implementation aims for a linear time complexity under specific constraints.
 * @param {Array} points - An array of points represented as [x, y].
 * @returns {Array} - The order of points to visit.
 */
function solveTSP(points) {
    // This is a simplified heuristic approach for TSP
    // In practice, TSP is NP-hard, and linear time solutions are approximations.
    return _.sortBy(points, point => point[0] + point[1]);
}

module.exports = { solveTSP };