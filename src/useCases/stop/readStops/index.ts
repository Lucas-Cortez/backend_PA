import { prisma } from "../../../infra/database";
import { PrismaStopRepository } from "../../../repositories/implementations/prisma/PrismaStopRepository";
import { ReadStopsController } from "./ReadStopsController";
import { ReadStopsUseCase } from "./ReadStopsUseCase";

const prismaStopRepository = new PrismaStopRepository(prisma);
const readStopsUseCase = new ReadStopsUseCase(prismaStopRepository);
const readStopsController = new ReadStopsController(readStopsUseCase);

export { readStopsController, readStopsUseCase };
