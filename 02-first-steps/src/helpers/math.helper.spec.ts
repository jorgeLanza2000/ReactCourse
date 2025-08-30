import { describe, expect, test } from 'vitest';
import { add, multiply, subtract } from './math.helper';

describe('add', () => {
  test('should add two positives numbers', () => {
    //! 1. Arrange
    const a = 1;
    const b = 2;

    //! 2. Act
    const result = add(a, b);

    //! 3. Assert
    expect(result).toBe(a + b);
  });

  test('should add two negative numbers', () => {
    //! 1. Arrange
    const a = -1;
    const b = -2;

    //! 2. Act
    const result = add(a, b);

    //! 3. Assert
    expect(result).toBe(a + b);
  });
});

describe('substract', () => {
  test('should subtract two positives numbers', () => {
    const a = 1;
    const b = 2;

    const result = subtract(a, b);

    expect(result).toBe(a - b);
  });

  test('should subtract two negative numbers', () => {
    const a = -1;
    const b = -2;

    const result = subtract(a, b);

    expect(result).toBe(a - b);
  });
});

describe('multiply', () => {
  test('should multiply two positives numbers', () => {
    const a = 1;
    const b = 2;

    const result = multiply(a, b);

    expect(result).toBe(a * b);
  });

  test('should multiply with 0', () => {
    const a = 10;
    const b = 0;

    const result = multiply(a, b);

    expect(result).toBe(a * b);
  });
});
