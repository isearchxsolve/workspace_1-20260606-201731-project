const optimizedTSPSolver = require('../src/tspSolverOptimized');

test('should solve TSP for given cities', () => {
    const cities = ['A', 'B', 'C'];
    const result = optimizedTSPSolver(cities);
    expect(result).toBe('optimized solution');
});
