import React, { FunctionComponent } from 'react';

import SortIcon from './SortIcon';

/**
 * The properties of the Cell component.
 */
type CellProps = {
  field: string,
  isCenter?: boolean,
  isLarge?: boolean,
  sort: {
    asc: boolean,
    field: string
  },
  sortByField: Function
};

/**
 * Renders an individual cell representing a column heading.
 */
const Cell: FunctionComponent<CellProps> = ({ children, field, isCenter, isLarge, sort, sortByField }) => {
  let className = '';

  if (isLarge) {
    className += 'd-none d-md-block';
  }

  if (isCenter) {
    if (className) {
      className += ' ';
    }

    className += 'text-center';
  }

  return (
    <th className={className} onClick={() => sortByField(field)}>
      {children}
      {(field === sort.field) && <SortIcon asc={sort.asc}/>}
    </th>
  );
};

export default Cell;
