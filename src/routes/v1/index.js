import { Router } from "express";
import { InfoController } from "../../controllers/index.js";
import airplaneRoutes from "./airplane-routes.js";

const router = Router();

router.use("/airplanes", airplaneRoutes);

router.get("/info", InfoController.info);

export default router;
