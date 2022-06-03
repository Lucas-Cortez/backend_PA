import { prisma } from "../../../infra/database";
import { PrismaStopRepository } from "../../../repositories/implementations/prisma/PrismaStopRepository";
import { CreateStopController } from "./CreateStopController";
import { CreateStopUseCase } from "./CreateStopUseCase";

const prismaStopRepository = new PrismaStopRepository(prisma);
const createStopUseCase = new CreateStopUseCase(prismaStopRepository);
const createStopController = new CreateStopController(createStopUseCase);

export { createStopController, createStopUseCase };
