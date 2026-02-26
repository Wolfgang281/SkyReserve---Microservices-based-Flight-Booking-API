import { Router } from "express";
import { InfoController } from "../../controllers/index.js";

const infoRouter = Router();

infoRouter.get("/info", InfoController.info);

export default infoRouter;
