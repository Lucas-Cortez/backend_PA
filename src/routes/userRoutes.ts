import { Router } from "express";
import { createUserController } from "../useCases/user/createUser";

const userRoutes = Router();

userRoutes.post("/", createUserController.handle);

export { userRoutes };
