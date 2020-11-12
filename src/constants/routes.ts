import { GlucoseChart } from "../components/GlucoseChart";
import { MeasurementChartAll } from "../components/MeasurementChartAll";
import { MeasurementChartSeparate } from "../components/MeasurementChartSeparate";

export const links = {
  dashboard: "/dashboard",
  glucose: "/glucose",
  allMeasurements: "/all-measurements",
  separateMeasurements: "/separate-measurements",
};

export const routes = [
  {
    route: links.glucose,
    component: GlucoseChart,
  },
  {
    route: links.separateMeasurements,
    component: MeasurementChartSeparate,
  },
  {
    route: links.allMeasurements,
    component: MeasurementChartAll,
  },
];

export const navigation = [
  {
    route: links.glucose,
    label: "Glucose",
  },
  {
    route: links.separateMeasurements,
    label: "Separate Measurements",
  },
  {
    route: links.allMeasurements,
    label: "All Measurements",
  },
];
