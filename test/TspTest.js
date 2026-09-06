const tsp = require('./TravellingSalesmanProblem');

describe('Tsp', () => {
  it('should solve the tsp', () => {
    const cities = [{ name: 'A', distance: 10 }, { name: 'B', distance: 20 }, { name: 'C', distance: 30 }];
    const solution = tsp.solve(cities);
    expect(solution).toEqual([0, 1, 2]);
  });
});