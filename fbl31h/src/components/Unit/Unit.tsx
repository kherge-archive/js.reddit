import React, { FunctionComponent } from 'react';

import { UnitType } from '../VehiclesContainer';

type UnitProps = {
  setUnitType: Function,
  unitType: UnitType
};

const selectedClass = (expected: UnitType, actual: UnitType) => {
  if (expected === actual) {
    return "btn-primary";
  }

  return "btn-secondary";
};

const Unit: FunctionComponent<UnitProps> = ({ setUnitType, unitType }) => (
  <div className="btn-group">
    <button className={"btn " + selectedClass(UnitType.MPH, unitType)} onClick={() => setUnitType(UnitType.MPH)} type="button">mph</button>
    <button className={"btn " + selectedClass(UnitType.KMH, unitType)} onClick={() => setUnitType(UnitType.KMH)} type="button">km/h</button>
  </div>
);

export default Unit;
