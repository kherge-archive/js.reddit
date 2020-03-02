import calculateDistance from './calculateDistance';

describe('Distance traveled calculator', () => {
  test('should calculate correctly', () => {
    const date = new Date(2020, 1, 1, 0, 0, 0, 0);
    const topSpeed = 123;
    const year = 2010;

    const result = calculateDistance(date, year, topSpeed);

    expect(result).toEqual(10780704);
  });
});