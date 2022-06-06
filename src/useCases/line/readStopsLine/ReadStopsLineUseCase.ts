import { Line, Stop_Line } from "@prisma/client";
import { PrismaLineRepository } from "../../../repositories/implementations/prisma/PrismaLineRepository";

export class ReadStopsLineUseCase {
  constructor(private prismaLineRepository: PrismaLineRepository) {}

  public async execute(
    id: number
  ): Promise<Omit<Stop_Line, "id" | "order" | "id_line" | "id_stop">[] | null> {
    return await this.prismaLineRepository.findAllStops(id);
  }
}
