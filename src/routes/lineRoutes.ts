import { Router } from "express";
import { calculateNewLineController } from "../useCases/line/calculateNewLine";
import { createLineController } from "../useCases/line/createLine";
import { readLinesController } from "../useCases/line/readLines";
import { readStopsLineController } from "../useCases/line/readStopsLine";

const lineRoutes = Router();

lineRoutes.get("/", (req, res) => readLinesController.handle(req, res));
lineRoutes.get("/:id", (req, res) => calculateNewLineController.handle(req, res));
lineRoutes.post("/", (req, res) => createLineController.handle(req, res));

export { lineRoutes };
