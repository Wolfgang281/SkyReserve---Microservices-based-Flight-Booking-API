import {
  createAirplane,
  destroyAirplane,
  getAirplane,
  getAllAirplanes,
  updateAirplane,
} from "./airplane-controller.js";
import { info } from "./info-controller.js";

export const InfoController = {
  info,
};

export const AirplaneController = {
  createAirplane,
  getAllAirplanes,
  getAirplane,
  destroyAirplane,
  updateAirplane,
};
