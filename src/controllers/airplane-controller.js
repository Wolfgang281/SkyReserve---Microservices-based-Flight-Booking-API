import { StatusCodes } from "http-status-codes";
import { AirplaneService } from "../services/index.js";
import { ErrorResponse, SuccessResponse } from "../utils/common/index.js";

export async function createAirplane(req, res) {
  try {
    const airplane = await AirplaneService.createAirplane({
      modelNumber: req.body.modelNumber,
      capacity: req.body.capacity,
    });
    SuccessResponse.data = airplane;
    SuccessResponse.message = "Successfully created a airplane";
    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    ErrorResponse.message = "Not able to create a airplane";
    res.status(error.statusCode).json(ErrorResponse);
  }
}

export const getAllAirplanes = async (req, res) => {
  try {
    const airplanes = await AirplaneService.getAllAirplanes();
    SuccessResponse.data = airplanes;
    SuccessResponse.message = "Successfully fetched all airplanes";
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    ErrorResponse.message = "Not able to fetch airplanes";
    res.status(error.statusCode).json(ErrorResponse);
  }
};

export const getAirplane = async (req, res) => {
  try {
    const airplane = await AirplaneService.getAirplane(req.params.id);
    SuccessResponse.data = airplane;
    SuccessResponse.message = "Successfully fetched the airplane";
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    ErrorResponse.message = "Not able to fetch airplane";
    res.status(error.statusCode).json(ErrorResponse);
  }
};

export const destroyAirplane = async (req, res) => {
  try {
    const destroyedAirplane = await AirplaneService.destroyAirplane(
      req.params.id,
    );
    SuccessResponse.data = destroyedAirplane;
    SuccessResponse.message = "Successfully deleted the airplane";
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    ErrorResponse.message = "Not able to delete airplane";
    res.status(error.statusCode).json(ErrorResponse);
  }
};

export const updateAirplane = async (req, res) => {
  try {
    const updatedAirplane = await AirplaneService.updateAirplane(
      req.params.id,
      {
        modelNumber: req.body.modelNumber,
        capacity: req.body.capacity,
      },
    );
    SuccessResponse.data = updatedAirplane;
    SuccessResponse.message = "Successfully updated the airplane";
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    ErrorResponse.message = "Not able to update airplane";
    res.status(error.statusCode).json(ErrorResponse);
  }
};
