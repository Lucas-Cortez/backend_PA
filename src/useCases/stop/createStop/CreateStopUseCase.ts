import { Stop } from "@prisma/client";
import { PrismaStopRepository } from "../../../repositories/implementations/prisma/PrismaStopRepository";
import { ICreateStopDTO } from "./ICreateStopDTO";

export class CreateStopUseCase {
  constructor(private prismaStopRepository: PrismaStopRepository) {}

  public async execute(stop: ICreateStopDTO): Promise<Stop> {
    return this.prismaStopRepository.create(stop);
  }
}
