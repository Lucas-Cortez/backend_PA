import { prisma } from "../../../infra/database";
import { PrismaLineRepository } from "../../../repositories/implementations/prisma/PrismaLineRepository";
import { ReadStopsLineController } from "./ReadStopsLineController";
import { ReadStopsLineUseCase } from "./ReadStopsLineUseCase";

const prismaLineRepository = new PrismaLineRepository(prisma);
const readStopsLineUseCase = new ReadStopsLineUseCase(prismaLineRepository);
const readStopsLineController = new ReadStopsLineController(readStopsLineUseCase);

export { readStopsLineController, readStopsLineUseCase };
