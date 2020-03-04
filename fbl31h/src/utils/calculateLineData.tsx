/// <reference path="../types/react-chartkick.d.ts" />
import { DataType } from 'react-chartkick';

import { Entries } from '../components/VehiclesContainer';
import calculateDistance from './calculateDistance';

type MappedPoints = {
  [key: string]: {
    [key: string]: number
  }
};

const calculateLineData = (entries: Entries, now: Date) => {
  const data: MappedPoints = {};
  const points: Date[] = calculatePoints(entries, now);

  points.forEach(point => {
    entries.forEach(entry => {
      const key = entry.year + ' ' + entry.make + ' ' + entry.model;
      const year = point.getFullYear();

      if (year >= entry.year) {
        if (typeof data[key] === 'undefined') {
          data[key] = {};
        }

        data[key][year] = calculateDistance(point, entry.year, entry.topSpeed);
      }
    });
  });

  return Object.keys(data).map(key => ({
    data: data[key],
    name: key
  })) as DataType[];
};

const calculatePoints = (entries: Entries, now: Date) => {
  const lastYear = entries
    .reduce((p, c) => p.year > c.year ? p : c)
    .year;
  const nowYear = now.getFullYear();
  const points: Date[] = entries
    .sort((a, b) => a.year - b.year)
    .map(({ year }) => new Date(year, 0, 1, 0, 0, 0, 0));

  let deltas = 0;
  let range = 0;

  if ((deltas = (nowYear - lastYear) / 100) > 1) {
    range = 100;
  } else if ((deltas = (nowYear - lastYear) / 10) > 1) {
    range = 10;
  } else {
    deltas = 0;
  }

  for (let i = 0; i < deltas; i++) {
    points.push(new Date(lastYear + (i * range), 0, 1, 0, 0, 0, 0));
  }

  points.push(now);

  return points;
};

export default calculateLineData;
