import { StatusCodes } from "http-status-codes";
import { AirplaneService } from "../services/index.js";

export async function createAirplane(req, res) {
  try {
    const airplane = await AirplaneService.createAirplane({
      modelNumber: req.body.modelNumber,
      capacity: req.body.capacity,
    });
    return res.status(StatusCodes.CREATED).json({
      data: airplane,
      success: true,
      message: "Successfully created a airplane",
      err: {},
    });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      data: {},
      success: false,
      message: "Not able to create a airplane",
      err: error,
    });
  }
}
