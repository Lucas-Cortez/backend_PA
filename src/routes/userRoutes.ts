import { Router } from "express";
import { createUserController } from "../useCases/user/createUser";

const userRoutes = Router();

userRoutes.post("/", (req, res) => createUserController.handle(req, res));

export { userRoutes };
