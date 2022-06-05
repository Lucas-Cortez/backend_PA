import { Line, PrismaClient } from "@prisma/client";
import { ICreateLineDTO } from "../../../useCases/line/createLine/ICreateLineDTO";
import { ILineRepository } from "../../ILineRepository";

export class PrismaLineRepository implements ILineRepository {
  constructor(private prismaClient: PrismaClient) {}

  public async create(line: ICreateLineDTO): Promise<Line> {
    const { stops, ...rest } = line;

    return await this.prismaClient.line.create({
      data: {
        ...rest,
        Stop_Line: {
          // createMany: { data: [...stops], skipDuplicates: true },
          create: [...stops],
        },
      },
      include: { Stop_Line: true },
    });
  }

  public async findAll(): Promise<Line[]> {
    return this.prismaClient.line.findMany();
  }
}
