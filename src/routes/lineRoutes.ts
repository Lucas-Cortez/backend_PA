import { Router } from "express";
import { createLineController } from "../useCases/line/createLine";

const lineRoutes = Router();

lineRoutes.post("/", (req, res) => createLineController.handle(req, res));

export { lineRoutes };
