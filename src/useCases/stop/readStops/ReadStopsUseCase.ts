import { Stop } from "@prisma/client";
import { PrismaStopRepository } from "../../../repositories/implementations/prisma/PrismaStopRepository";

export class ReadStopsUseCase {
  constructor(private prismaStopRepository: PrismaStopRepository) {}

  public async execute(): Promise<Stop[]> {
    return await this.prismaStopRepository.findAll();
  }
}
