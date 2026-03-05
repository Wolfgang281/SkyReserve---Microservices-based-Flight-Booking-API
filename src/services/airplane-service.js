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

export const getAllAirplanes = async () => {
  try {
    const airplanes = await airplaneRepository.getAll();
    return airplanes;
  } catch (error) {
    throw new AppError(
      "An error occurred while fetching the airplanes.",
      StatusCodes.INTERNAL_SERVER_ERROR,
    );
  }
};

export const getAirplane = async (id) => {
  try {
    let airplane = await airplaneRepository.get(id);
    return airplane;
  } catch (error) {
    if (error.statusCode === StatusCodes.NOT_FOUND) {
      throw new AppError(
        "Airplane not found with the given id.",
        StatusCodes.NOT_FOUND,
      );
    }

    throw new AppError(
      "An error occurred while fetching the airplane.",
      StatusCodes.INTERNAL_SERVER_ERROR,
    );
  }
};

export const destroyAirplane = async (id) => {
  try {
    let destroyedAirplane = await airplaneRepository.destroy(id);
    return destroyedAirplane;
  } catch (error) {
    if (error.statusCode === StatusCodes.NOT_FOUND) {
      throw new AppError(
        "Airplane not found with the given id.",
        error.statusCode,
      );
    }
    throw new AppError(
      "An error occurred while deleting the airplane.",
      StatusCodes.INTERNAL_SERVER_ERROR,
    );
  }
};

export const updateAirplane = async (id, data) => {
  try {
    let updatedAirplane = await airplaneRepository.update(id, data);
    return updatedAirplane;
  } catch (error) {
    console.log("error: ", error);
    if (error.statusCode === StatusCodes.NOT_FOUND) {
      throw new AppError(
        "Airplane not found with the given id.",
        error.statusCode,
      );
    }
    throw new AppError(
      "An error occurred while updating the airplane.",
      StatusCodes.INTERNAL_SERVER_ERROR,
    );
  }
};
