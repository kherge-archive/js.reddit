/**
 * Calculates the distance travel by a vehicle at its top speed.
 *
 * The first month and day of the given year is used in the calculation. The top speed can be of
 * any unit (miles or kilometers) but it must always be by hour (e.g. 100 mph, 100 km/h). The top
 * speed will always be divided by minutes, seconds, then milliseconds.
 *
 * @param now      The current date and time.
 * @param year     The year the vehicle started traveling.
 * @param topSpeed The top speed of the vehicle.
 */
const calculateDistance = (now: Date, year: number, topSpeed: number) => {
  const speed = topSpeed / 60 / 60 / 1000;
  const then = new Date(year, 0, 1, 0, 0, 0, 0);

  return (now.getTime() - then.getTime()) * speed;
};

export default calculateDistance;