import { prisma } from "../../../infra/database";
import { PrismaLineRepository } from "../../../repositories/implementations/prisma/PrismaLineRepository";
import { DeleteLineController } from "./DeleteLineController";
import { DeleteLineUseCase } from "./DeleteLineUseCase";

const prismaLineRepository = new PrismaLineRepository(prisma);
const deleteLineUseCase = new DeleteLineUseCase(prismaLineRepository);
const deleteLineController = new DeleteLineController(deleteLineUseCase);

export { deleteLineController, deleteLineUseCase };
