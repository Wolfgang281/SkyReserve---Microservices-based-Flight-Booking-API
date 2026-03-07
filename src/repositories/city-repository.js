import db from "../models/index.js";
import CrudRepository from "./crud-repository.js";

const { City } = db;

class CityRepository extends CrudRepository {
  constructor() {
    super(City);
  }
}

export default CityRepository;
