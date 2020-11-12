import { AxiosResponse } from "axios";
import transportService from "../services/transport";
import {
  GLUCOSE_SERVICE_URL,
  API_URL,
  MEASUREMENT_ALL_SERVICE_URL,
  MEASUREMENT_SEPARATE_SERVICE_URL,
} from "../constants/api";

export const getGlucose = (): Promise<AxiosResponse> =>
  transportService.get(`${API_URL}${GLUCOSE_SERVICE_URL}`);

export const getMeasurementAll = (): Promise<AxiosResponse> =>
  transportService.get(`${API_URL}${MEASUREMENT_ALL_SERVICE_URL}`);

export const getMeasurementSeparate = (): Promise<AxiosResponse> =>
  transportService.get(`${API_URL}${MEASUREMENT_SEPARATE_SERVICE_URL}`);
