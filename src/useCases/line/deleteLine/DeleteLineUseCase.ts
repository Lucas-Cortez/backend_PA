import { Line } from "@prisma/client";
import { PrismaLineRepository } from "../../../repositories/implementations/prisma/PrismaLineRepository";

export class DeleteLineUseCase {
  constructor(private prismaLineRepository: PrismaLineRepository) {}

  public async execute(id: number): Promise<Line> {
    return await this.prismaLineRepository.delete(id);
  }
}
