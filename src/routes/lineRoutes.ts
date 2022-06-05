import { Router } from "express";
import { createLineController } from "../useCases/line/createLine";
import { readLinesController } from "../useCases/line/readLines";

const lineRoutes = Router();

lineRoutes.get("/", (req, res) => readLinesController.handle(req, res));
lineRoutes.post("/", (req, res) => createLineController.handle(req, res));

export { lineRoutes };
