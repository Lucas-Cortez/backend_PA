import { prisma } from "../../../infra/database";
import { PrismaStopRepository } from "../../../repositories/implementations/prisma/PrismaStopRepository";
import { DeleteStopController } from "./DeleteStopController";
import { DeleteStopUseCase } from "./DeleteStopUseCase";

const prismaStopRepository = new PrismaStopRepository(prisma);
const deleteStopUseCase = new DeleteStopUseCase(prismaStopRepository);
const deleteStopController = new DeleteStopController(deleteStopUseCase);

export { deleteStopUseCase, deleteStopController };
