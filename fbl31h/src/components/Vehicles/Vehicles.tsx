import React, { FunctionComponent } from 'react';

import './Vehicles.css';

/**
 * The properties of the Vehicles component.
 */
type VehiclesProps = {
  sort: Function
};

/**
 * Renders the table containing the individual Vehicle renderings.
 */
const Vehicles: FunctionComponent<VehiclesProps> = ({ children, sort }) => (
  <table className="table table-striped vehicles">
    <thead>
      <tr>
        <th onClick={() => sort('year')}>Year</th>
        <th className="d-none d-md-block" onClick={() => sort('make')}>Make</th>
        <th onClick={() => sort('model')}>Model</th>
        <th className="d-none d-md-block text-center" onClick={() => sort('topSpeed')}>Top Speed</th>
        <th className="text-center" onClick={() => sort('distance')}>Distance</th>
      </tr>
    </thead>
    <tbody>
      {children}
    </tbody>
  </table>
);

export default Vehicles;