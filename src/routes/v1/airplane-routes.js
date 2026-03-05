import { Router } from "express";
import { AirplaneController } from "../../controllers/index.js";

const router = Router();

router.post("/", AirplaneController.createAirplane);
router.get("/", AirplaneController.getAllAirplanes);
router.get("/:id", AirplaneController.getAirplane);
router.delete("/:id", AirplaneController.destroyAirplane);
router.patch("/:id", AirplaneController.updateAirplane);

export default router;
