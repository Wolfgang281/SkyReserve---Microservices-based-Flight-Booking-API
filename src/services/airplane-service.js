import { Logger } from "../config/index.js";
import { AirplaneRepository } from "../repositories/index.js";

const airplaneRepository = new AirplaneRepository();

export const createAirplane = async (data) => {
  try {
    const airplane = await airplaneRepository.create(data);
    return airplane;
  } catch (error) {
    Logger.error("Error in AirplaneService - createAirplane method:", error);
    throw error;
  }
};
