import { StatusCodes } from "http-status-codes";
import AppError from "../utils/errors/app-error.js";

class CrudRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    const addedData = await this.model.create(data);
    return addedData;
  }

  async destroy(data) {
    const destroyedData = await this.model.destroy({
      where: {
        id: data,
      },
    });
    if (destroyedData === 0) {
      throw new AppError(
        "Resource not found with the given id.",
        StatusCodes.NOT_FOUND,
      );
    }
    return destroyedData;
  }

  async get(id) {
    const fetchedData = await this.model.findByPk(id);
    if (!fetchedData) {
      throw new AppError(
        "Resource not found with the given id.",
        StatusCodes.NOT_FOUND,
      );
    }
    return fetchedData;
  }

  async getAll() {
    const fetchedData = await this.model.findAll();
    if (fetchedData.length === 0) {
      throw new AppError("No resources found.", StatusCodes.NOT_FOUND);
    }
    return fetchedData;
  }

  async update(id, data) {
    const updatedData = await this.model.update(data, {
      where: {
        id: id,
      },
    });
    if (updatedData[0] === 0) {
      throw new AppError(
        "Resource not found with the given id.",
        StatusCodes.NOT_FOUND,
      );
    }
    return updatedData;
  }
}

export default CrudRepository;

//? anything related to database operations can be written here, and then we can use this class in our services to perform CRUD operations on the database.
