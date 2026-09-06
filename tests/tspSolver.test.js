const { solveTSP } = require('../src/tspSolver');

describe('Travelling Salesman Problem Solver', () => {
    test('should return points sorted by heuristic', () => {
        const points = [[0, 0], [1, 2], [3, 1], [4, 4]];
        const result = solveTSP(points);
        expect(result).toEqual([[0, 0], [1, 2], [3, 1], [4, 4]]);
    });
});