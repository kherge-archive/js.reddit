import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import Filter from './Filter';

describe('<Filter/>', () => {
  test('should render without error', () => {
    const component = render(<Filter filter={() => {}}/>);

    expect(component).not.toBeNull();
  });

  test('should update filter on input change', () => {
    const filter = jest.fn();
    const { getByTestId } = render(<Filter filter={filter}/>);
    const input = getByTestId('filter') as HTMLInputElement;
    
    fireEvent.change(input, { target: { value: 'test' } });

    expect(filter).toBeCalled();
    expect(input.value).toEqual('test');
  });
});
