import { Bus } from "@prisma/client";
import { PrismaBusRepository } from "../../../repositories/implementations/prisma/PrismaBusRepository";

export class DeleteBusUseCase {
  constructor(private prismaBusRepository: PrismaBusRepository) {}

  public async execute(id: number): Promise<Bus> {
    return await this.prismaBusRepository.delete(id);
  }
}
