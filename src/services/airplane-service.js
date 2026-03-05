import { StatusCodes } from "http-status-codes";
import { AirplaneRepository } from "../repositories/index.js";
import AppError from "../utils/errors/app-error.js";

const airplaneRepository = new AirplaneRepository();

export const createAirplane = async (data) => {
  try {
    const airplane = await airplaneRepository.create(data);
    return airplane;
  } catch (error) {
    console.log("error: ", error);
    if (error.name === "SequelizeValidationError") {
      let explanation = [];
      error.errors.forEach((err) => {
        explanation.push(err.message);
      });
      throw new AppError(
        "Validation error: " + explanation.join(", "),
        StatusCodes.BAD_REQUEST,
      );
    }
    throw new AppError(
      "An error occurred while creating the airplane.",
      StatusCodes.INTERNAL_SERVER_ERROR,
    );
  }
};
