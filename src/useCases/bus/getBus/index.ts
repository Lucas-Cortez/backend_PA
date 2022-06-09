import { prisma } from "../../../infra/database";
import { PrismaBusRepository } from "../../../repositories/implementations/prisma/PrismaBusRepository";
import { GetBusController } from "./GetBusController";
import { GetBusUseCase } from "./GetBusUseCase";

const prismaBusRepositoryory = new PrismaBusRepository(prisma);
const getBusUseCase = new GetBusUseCase(prismaBusRepositoryory);
const getBusController = new GetBusController(getBusUseCase);

export { getBusController, getBusUseCase };
