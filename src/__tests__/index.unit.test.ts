import {
  greatestCommonDivisor,
  greatestCommonDivisorOptimized
} from '../index';

describe('Fundamental algorithms tests', () => {
  test('Greatest Common Divisor', () => {
    expect(greatestCommonDivisor({ m: 119, n: 544 })).toMatchSnapshot();
  });

  test('Greatest Common Divisor - Optimized', () => {
    expect(
      greatestCommonDivisorOptimized({ m: 119, n: 544 })
    ).toMatchSnapshot();
  });
});
