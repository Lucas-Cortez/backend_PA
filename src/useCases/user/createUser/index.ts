import { prisma } from "../../../infra/database";
import { PrismaUserRepository } from "../../../repositories/implementations/prisma/PrismaUserRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const prismaUserRepository = new PrismaUserRepository(prisma);
const createUserUseCase = new CreateUserUseCase(prismaUserRepository);
const createUserController = new CreateUserController(createUserUseCase);

export { createUserController, createUserUseCase };
