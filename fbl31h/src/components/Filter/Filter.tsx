import React, { FunctionComponent } from 'react';

import './Filter.css';

/**
 * The properties for the Filter component.
 */
type FilterProps = {
  filter: Function
};

/**
 * Renders an input field for filtering the vehicles list.
 */
const Filter: FunctionComponent<FilterProps> = ({ filter }) => (
  <div className="input-group filter">
    <div className="input-group-prepend">
      <span className="input-group-text">Filter</span>
    </div>
    <input className="form-control" data-testid="filter" onChange={(e) => filter(e.target.value)} type="search"/>
  </div>
);

export default Filter;
