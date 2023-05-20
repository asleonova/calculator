import { Calculator } from "../../src/calculator";

describe('Calculator', () => {
  let calculator: Calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  it('should add two numbers', () => {
    expect(calculator.add(2, 3)).toBe(5);
  });

  it('should subtract two numbers', () => {
    expect(calculator.subtract(5, 3)).toBe(2);
  });

  it('should multiply two numbers', () => {
    expect(calculator.multiply(2, 3)).toBe(6);
  });

  it('should divide two numbers', () => {
    expect(calculator.divide(6, 3)).toBe(2);
  });

  it('should throw an error when dividing by zero', () => {
    expect(() => calculator.divide(6, 0)).toThrowError('Division by zero');
  });
});