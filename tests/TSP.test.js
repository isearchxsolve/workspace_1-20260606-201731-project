import { describe, it } from 'jest'
import { solve_tsp } from './index'

describe('TSP solver', () => {
  it('should solve the TSP', () => {
    const graph = {
      0: { 1: 0.5, 2: 0.7 },
      1: { 0: 0.5, 2: 0.3 },
      2: { 0: 0.7, 1: 0.3 }
    }
    const result = solve_tsp(graph)
    expect(result).toEqual([0, 1, 2])
  })
})