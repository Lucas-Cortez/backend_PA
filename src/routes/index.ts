import { Router } from "express";
import { busRoutes } from "./busRoutes";
import { stopRoutes } from "./stopRoutes";
import { userRoutes } from "./userRoutes";

const routes = Router();

routes.use("/users", userRoutes);
routes.use("/bus", busRoutes);
routes.use("/stop", stopRoutes);

export { routes };
