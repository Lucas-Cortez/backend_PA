import { Router } from "express";
import { createStopController } from "../useCases/stop/createStop";
import { deleteStopController } from "../useCases/stop/deleteStop";
import { readStopsController } from "../useCases/stop/readStops";

const stopRoutes = Router();

stopRoutes.get("/", (req, res) => readStopsController.handle(req, res));
stopRoutes.post("/", (req, res) => createStopController.handle(req, res));
stopRoutes.delete("/:id", (req, res) => deleteStopController.handle(req, res));

export { stopRoutes };
