import { Logger } from "../config/index.js";

class CrudRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    const addedData = await this.model.create(data);
    return addedData;
  }

  async destroy(data) {
    try {
      const destroyedData = await this.model.destroy({
        where: {
          id: data,
        },
      });
      return destroyedData;
    } catch (error) {
      Logger.error("Error in CrudRepository - destroy method:", error);
      throw error;
    }
  }

  async get(data) {
    try {
      const fetchedData = await this.model.findByPk(data);
      return fetchedData;
    } catch (error) {
      Logger.error("Error in CrudRepository - get method:", error);
      throw error;
    }
  }

  async getAll() {
    try {
      const fetchedData = await this.model.findAll();
      return fetchedData;
    } catch (error) {
      Logger.error("Error in CrudRepository - get method:", error);
      throw error;
    }
  }

  async update(id, data) {
    try {
      const updatedData = await this.model.update(data, {
        where: {
          id: id,
        },
      });
      return updatedData;
    } catch (error) {
      Logger.error("Error in CrudRepository - update method:", error);
      throw error;
    }
  }
}

export default CrudRepository;

//? anything related to database operations can be written here, and then we can use this class in our services to perform CRUD operations on the database.
