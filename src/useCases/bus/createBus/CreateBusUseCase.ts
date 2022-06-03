import { Bus } from "@prisma/client";
import { PrismaBusRepository } from "../../../repositories/implementations/prisma/PrismaBusRepository";
import { ICreateBusDTO } from "./ICreateBusDTO";

export class CreateBusUseCase {
  constructor(private prismaBusRepository: PrismaBusRepository) {}

  public async execute(bus: ICreateBusDTO): Promise<Bus> {
    return await this.prismaBusRepository.create(bus);
  }
}
