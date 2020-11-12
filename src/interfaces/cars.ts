export interface Car {
  stockNumber: number;
  manufacturerName: string;
  modelName: string;
  color: string;
  mileage: {
    number: number;
    unit: string;
  };
  fuelType: string;
  pictureUrl: string;
}

export type Colors = Array<string>;

export interface Manufacturer {
  name: string;
  models: Array<{ name: string }>;
}

export type Manufacturers = Array<Manufacturer>;
