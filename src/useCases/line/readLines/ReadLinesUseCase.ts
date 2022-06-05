import { Line } from "@prisma/client";
import { PrismaLineRepository } from "../../../repositories/implementations/prisma/PrismaLineRepository";

export class ReadLinesUseCase {
  constructor(private prismaLineRepository: PrismaLineRepository) {}

  public async execute(): Promise<Line[]> {
    return await this.prismaLineRepository.findAll();
  }
}
