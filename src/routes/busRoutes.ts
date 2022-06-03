import { Router } from "express";
import { createBusController } from "../useCases/bus/createBus";

const busRoutes = Router();

busRoutes.post("/", (req, res) => createBusController.handle(req, res));

export { busRoutes };
