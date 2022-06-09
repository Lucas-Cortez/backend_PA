import { Router } from "express";
import { createBusController } from "../useCases/bus/createBus";
import { deleteBusController } from "../useCases/bus/deleteBus";
import { getBusController } from "../useCases/bus/getBus";

const busRoutes = Router();

busRoutes.get("/", (req, res) => getBusController.handle(req, res));
busRoutes.post("/", (req, res) => createBusController.handle(req, res));
busRoutes.delete("/:id", (req, res) => deleteBusController.handle(req, res));

export { busRoutes };
