import { Stop } from "@prisma/client";
import { PrismaStopRepository } from "../../../repositories/implementations/prisma/PrismaStopRepository";

export class DeleteStopUseCase {
  constructor(private prismaStopRepository: PrismaStopRepository) {}

  public async execute(id: number): Promise<Stop> {
    return await this.prismaStopRepository.delete(id);
  }
}
