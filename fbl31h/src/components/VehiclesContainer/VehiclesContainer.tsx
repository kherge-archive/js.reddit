import React, { FunctionComponent, useState, useEffect } from 'react';

import Filter from '../Filter';
import Vehicle, { VehicleProps } from '../Vehicle';
import Vehicles from '../Vehicles';

import calculateDistance from '../../utils/calculateDistance';
import initial from '../../config/vehicles.json';
import sortVehicleProps from '../../utils/sortVehicleProps';
import Unit from '../Unit/Unit';

import './VehiclesContainer.css';

export enum UnitType {
  KMH,
  MPH
}

/**
 * The list of vehicle entries from the JSON.
 */
type Entries = Entry[];

/**
 * The vehicle entry from the JSON data.
 */
type Entry = {
  make: string,
  model: string,
  topSpeed: number,
  year: number
};

/**
 * Renders a filterable and sortable table with data updated on an interval.
 */
const VehiclesContainer: FunctionComponent = () => {

  // Recalculate the distance on a regular interval.
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(
      () => setDate(new Date()),
      2000
    );

    return () => clearInterval(interval);
  });

  // The initial list of vehicle entries.
  let entries: Entry[] = JSON.parse(JSON.stringify(initial));

  // Filter the list of entries.
  let [filter, setFilter] = useState('');

  if (filter) {
    entries = entries.filter(entry => {
      const lower = filter.toLowerCase();

      return entry.make.toLowerCase().includes(lower) 
        || entry.model.toLowerCase().includes(lower);
    });
  }

  // Convert unit type.
  let [unitType, setUnitType] = useState(UnitType.MPH);

  // Convert the entries to props.
  let props: VehicleProps[] = entries.map(entry => {
    let topSpeed = entry.topSpeed;

    if (unitType === UnitType.KMH) {
      topSpeed *= 1.609344;
    }

    return {
      ...entry,
      distance: calculateDistance(date, entry.year, topSpeed),
      key: entry.make + ' ' + entry.model,
      topSpeed
    };
  });

  // Sort the list of entries.
  let [sort, setSort] = useState({
    asc: false,
    field: 'distance'
  });

  props = sortVehicleProps(props, sort.field, sort.asc);

  /**
   * Sorts the vehicles by the select column (ascending, then descending).
   */
  const sortByField = (field: string) => {
    if (sort.field === field) {
      setSort({
        ...sort,
        asc: !sort.asc
      });
    } else {
      setSort({
        asc: true,
        field
      });
    }
  };

  return (
    <>
      <div className="row controls">
        <div className="col">
          <Filter filter={setFilter}/>
        </div>
        <div className="col-md-auto">
          <Unit setUnitType={setUnitType} unitType={unitType}/>
        </div>
      </div>
      <Vehicles sort={sort} sortByField={sortByField}>
        {props.map(prop => <Vehicle {...prop}/>)}
      </Vehicles>
    </>
  );
};

export default VehiclesContainer;