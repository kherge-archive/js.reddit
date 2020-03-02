import { VehicleProps } from "../components/Vehicle/Vehicle";

const sortVehicleProps = (array: object[], field: string, asc: boolean) : VehicleProps[] => {
  return array.sort((a: any, b: any) => {
    let aField = a[field];
    let bField = b[field];
    let flip = asc ? 1 : -1;

    if (typeof aField === "string") {
      aField = aField.toLowerCase();
    }

    if (typeof bField === "string") {
      bField = bField.toLowerCase();
    }

    if (aField > bField) {
      return 1 * flip;
    } else if (aField < bField) {
      return -1 * flip;
    }

    return 0;
  }) as VehicleProps[];
};

export default sortVehicleProps;