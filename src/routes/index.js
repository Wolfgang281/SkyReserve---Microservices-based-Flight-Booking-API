import { Router } from "express";
import infoRouter from "./v1/index.js";

const router = Router();

router.use("/v1", infoRouter);

export default router;
