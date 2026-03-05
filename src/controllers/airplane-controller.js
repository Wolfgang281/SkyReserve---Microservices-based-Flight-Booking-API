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
