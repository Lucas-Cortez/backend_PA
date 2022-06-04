import { Router } from "express";
import { busRoutes } from "./busRoutes";
import { lineRoutes } from "./lineRoutes";
import { stopRoutes } from "./stopRoutes";
import { userRoutes } from "./userRoutes";

const routes = Router();

routes.use("/user", userRoutes);
routes.use("/bus", busRoutes);
routes.use("/stop", stopRoutes);
routes.use("/line", lineRoutes);

export { routes };
