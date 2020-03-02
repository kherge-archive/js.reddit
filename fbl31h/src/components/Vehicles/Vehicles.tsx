import React, { FunctionComponent } from 'react';

import Cell from './Cell';

import './Vehicles.css';

/**
 * The properties of the Vehicles component.
 */
type VehiclesProps = {
  sort: {
    asc: boolean,
    field: string
  },
  sortByField: Function
};

/**
 * Renders the table containing the individual Vehicle renderings.
 */
const Vehicles: FunctionComponent<VehiclesProps> = ({ children, ...props }) => (
  <table className="table table-striped vehicles">
    <thead>
      <tr>
        <Cell field="year" {...props}>Year</Cell>
        <Cell field="make" isLarge {...props}>Make</Cell>
        <Cell field="model" {...props}>Model</Cell>
        <Cell field="topSpeed" isCenter isLarge {...props}>Top Speed</Cell>
        <Cell field="distance" isCenter {...props}>Distance</Cell>
      </tr>
    </thead>
    <tbody>
      {children}
    </tbody>
  </table>
);

export default Vehicles;