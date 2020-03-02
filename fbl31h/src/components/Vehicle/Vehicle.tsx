import React, { FunctionComponent } from 'react';

import './Vehicle.css';

/**
 * The properties of the Vehicle component.
 */
export type VehicleProps = {
  distance: number,
  make: string,
  model: string,
  topSpeed: number,
  year: number
};

/**
 * The number formatter.
 */
const number = new Intl.NumberFormat('en-US', {
  maximumFractionDigits: 2
});

/**
 * Renders an individual vehicle for the table of vehicles.
 */
const Vehicle: FunctionComponent<VehicleProps> = ({ distance, make, model, topSpeed, year }) => (
  <tr className="vehicle">
    <td>{year}</td>
    <td className="d-none d-md-block">{make}</td>
    <td>{model}</td>
    <td className="d-none d-md-block">{topSpeed}</td>
    <td>{number.format(distance)}</td>
  </tr>
);

export default Vehicle;