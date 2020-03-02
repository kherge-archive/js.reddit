import sortVehicleProps from './sortVehicleProps';
import { VehicleProps } from '../components/Vehicle/Vehicle';

describe('Vehicle sorter', () => {
  const props: VehicleProps[] = [
    {
      distance: 100,
      make: "A",
      model: "Z",
      topSpeed: 200,
      year: 300
    },
    {
      distance: 59,
      make: "B",
      model: "Y",
      topSpeed: 150,
      year: 250
    },
    {
      distance: 99,
      make: "C",
      model: "X",
      topSpeed: 199,
      year: 299
    }
  ];

  test('should sort by distance in ascending order', () => {
    const result = sortVehicleProps(props, 'distance', true);

    expect(result[0].make).toEqual('B');
    expect(result[1].make).toEqual('C');
    expect(result[2].make).toEqual('A');
  });

  test('should sort by make in descending order', () => {
    const result = sortVehicleProps(props, 'make', false);

    expect(result[0].make).toEqual('C');
    expect(result[1].make).toEqual('B');
    expect(result[2].make).toEqual('A');
  });
});