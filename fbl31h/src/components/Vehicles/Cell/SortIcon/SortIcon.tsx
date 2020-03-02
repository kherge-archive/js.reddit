import React, { FunctionComponent } from 'react';

import './SortIcon.css';

/**
 * The properties of the SortIcon component.
 */
type SortIconProps = {
  asc: boolean
};

/**
 * Renders a sorting icon.
 */
const SortIcon: FunctionComponent<SortIconProps> = ({ asc }) => (
  <span className="sortIcon">{asc ? "↓" : "↑"}</span>
);

export default SortIcon;
