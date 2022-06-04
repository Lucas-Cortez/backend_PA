import { Line } from "@prisma/client";
import { PrismaLineRepository } from "../../../repositories/implementations/prisma/PrismaLineRepository";
import { ICreateLineDTO } from "./ICreateLineDTO";

export class CreateLineUseCase {
  constructor(private prismaLineRepository: PrismaLineRepository) {}

  public async execute(line: ICreateLineDTO): Promise<Line> {
    return await this.prismaLineRepository.create(line);
  }
}
