import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import Vehicles from './Vehicles';

describe('<Vehicles/>', () => {
  test('should render without error', () => {
    const component = render(<Vehicles sort={() => {}}/>);

    expect(component).not.toBeNull();
  });

  test('should sort on column click', () => {
    const sort = jest.fn();
    const { getByText } = render(<Vehicles sort={sort}/>);

    fireEvent.click(getByText('Year'));
    fireEvent.click(getByText('Make'));
    fireEvent.click(getByText('Model'));
    fireEvent.click(getByText('Top Speed'));
    fireEvent.click(getByText('Distance'));

    expect(sort).toHaveBeenNthCalledWith(1, 'year');
    expect(sort).toHaveBeenNthCalledWith(2, 'make');
    expect(sort).toHaveBeenNthCalledWith(3, 'model');
    expect(sort).toHaveBeenNthCalledWith(4, 'topSpeed');
    expect(sort).toHaveBeenNthCalledWith(5, 'distance');
  });
});
