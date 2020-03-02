import React from 'react';
import { render } from '@testing-library/react';

import Vehicle, { VehicleProps } from './Vehicle';

const build = (props: VehicleProps) => render(
  <table>
    <tbody>
      <Vehicle {...props}/>
    </tbody>
  </table>
);

describe('<Vehicle/>', () => {
  const props: VehicleProps = {
    distance: 1,
    make: 'Test Make',
    model: 'Test Model',
    topSpeed: 2,
    year: 3
  };

  test('should render without error', () => {
    const component = build(props);

    expect(component).not.toBeNull();
    expect(component.getByText(props.distance.toString())).not.toBeNull();
    expect(component.getByText(props.make)).not.toBeNull();
    expect(component.getByText(props.model)).not.toBeNull();
    expect(component.getByText(props.topSpeed.toString())).not.toBeNull();
    expect(component.getByText(props.year.toString())).not.toBeNull();
  });
});
