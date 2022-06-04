import { prisma } from "../../../infra/database";
import { PrismaLineRepository } from "../../../repositories/implementations/prisma/PrismaLineRepository";
import { CreateLineController } from "./CreateLineController";
import { CreateLineUseCase } from "./CreateLineUseCase";

const prismaLineRepository = new PrismaLineRepository(prisma);
const createLineUseCase = new CreateLineUseCase(prismaLineRepository);
const createLineController = new CreateLineController(createLineUseCase);

export { createLineController, createLineUseCase };
