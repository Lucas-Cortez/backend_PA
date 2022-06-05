import { prisma } from "../../../infra/database";
import { PrismaLineRepository } from "../../../repositories/implementations/prisma/PrismaLineRepository";
import { ReadLinesController } from "./ReadLinesController";
import { ReadLinesUseCase } from "./ReadLinesUseCase";

const prismaLineRepository = new PrismaLineRepository(prisma);
const readLinesUseCase = new ReadLinesUseCase(prismaLineRepository);
const readLinesController = new ReadLinesController(readLinesUseCase);

export { readLinesController, readLinesUseCase };
