import db from "../models/index.js";
import CrudRepository from "./crud-repository.js";

const { Airplane } = db;
// console.log("db: ", db);

class AirplaneRepository extends CrudRepository {
  constructor() {
    super(Airplane);
  }
}

export default AirplaneRepository;
