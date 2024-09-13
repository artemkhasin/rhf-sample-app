import { calculateOperations } from './claculator';

describe('calculateOperations', () => {
  it('should correctly return the sum, product, quotient, and difference of two positive numbers', () => {
    const result = calculateOperations(6, 3);
    expect(result.adding).toBe(9);
    expect(result.multiplication).toBe(18);
    expect(result.division).toBe(2);
    expect(result.subtraction).toBe(3);
  });

  it('should handle division by zero by returning `Infinity` for the division operation', () => {
    const result = calculateOperations(6, 0);
    expect(result.adding).toBe(6);
    expect(result.multiplication).toBe(0);
    expect(result.division).toBe(Infinity);
    expect(result.subtraction).toBe(6);
  });

  it('should correctly handle negative numbers for all arithmetic operations', () => {
    const result = calculateOperations(-6, -3);
    expect(result.adding).toBe(-9);
    expect(result.multiplication).toBe(18);
    expect(result.division).toBe(2);
    expect(result.subtraction).toBe(-3);
  });
});