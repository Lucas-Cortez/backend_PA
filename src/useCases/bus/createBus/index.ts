import { prisma } from "../../../infra/database";
import { PrismaBusRepository } from "../../../repositories/implementations/prisma/PrismaBusRepository";
import { CreateBusController } from "./CreateBusController";
import { CreateBusUseCase } from "./CreateBusUseCase";

const prismaBusRepository = new PrismaBusRepository(prisma);
const createBusUseCase = new CreateBusUseCase(prismaBusRepository);
const createBusController = new CreateBusController(createBusUseCase);

export { createBusController, createBusUseCase };
