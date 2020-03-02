/// <reference path="../types/react-chartkick.d.ts" />
import { DataType } from 'react-chartkick';

import { Entries } from '../components/VehiclesContainer';
import calculateDistance from './calculateDistance';

const newDate = (year: number) => new Date(year, 11, 31, 23, 59, 59);

const nextDecade = (date: Date, offset: number) => {
  const decade = (Math.ceil(date.getFullYear() / 10) * 10) + offset;

  return newDate(decade);
};

const calculateLineData = (entries: Entries, newest: Date) => {
  const data: DataType[] = [];
  const oldest = newDate(entries.reduce((p, n) => p.year > n.year ? n : p).year);
  const points: Date[] = [newest];

  for (let i = 0, point = nextDecade(newest, -10); point >= oldest; i++, point = nextDecade(point, -10)) {
    points.push(point);

    if (i === 10) {
      break;
    }
  }

  points.push(oldest);

  entries.forEach(entry => {
    let entryData: {[key: string]: number} = {};

    points.forEach(point =>
      entryData[point.getFullYear().toString()] = (point.getFullYear() >= entry.year) 
        ? calculateDistance(point, entry.year, entry.topSpeed)
        : 0
    );

    data.push({
      data: entryData,
      name: entry.year + ' ' + entry.model + ' ' + entry.make
    });
  });

  return data;
};

export default calculateLineData;
