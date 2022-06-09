import { Bus } from "@prisma/client";
import { PrismaBusRepository } from "../../../repositories/implementations/prisma/PrismaBusRepository";

export class GetBusUseCase {
  constructor(private prismaBusRepository: PrismaBusRepository) {}

  public async execute(): Promise<Bus[]> {
    return await this.prismaBusRepository.findAll();
  }
}
