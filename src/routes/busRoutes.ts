import { Router } from "express";
import { createBusController } from "../useCases/bus/createBus";
import { getBusController } from "../useCases/bus/getBus";

const busRoutes = Router();

busRoutes.get("/", (req, res) => getBusController.handle(req, res));
busRoutes.post("/", (req, res) => createBusController.handle(req, res));

export { busRoutes };
