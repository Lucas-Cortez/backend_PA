import { prisma } from "../../../infra/database";
import { PrismaBusRepository } from "../../../repositories/implementations/prisma/PrismaBusRepository";
import { DeleteBusController } from "./DeleteBusController";
import { DeleteBusUseCase } from "./DeleteBusUseCase";

const prismaBusRepository = new PrismaBusRepository(prisma);
const deleteBusUseCase = new DeleteBusUseCase(prismaBusRepository);
const deleteBusController = new DeleteBusController(deleteBusUseCase);

export { deleteBusController, deleteBusUseCase };
