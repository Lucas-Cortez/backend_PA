import { Router } from "express";
import { createStopController } from "../useCases/stop/createStop";

const stopRoutes = Router();

stopRoutes.post("/", (req, res) => createStopController.handle(req, res));

export { stopRoutes };
