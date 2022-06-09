import { Line, PrismaClient, Stop, Stop_Line } from "@prisma/client";
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
    return this.prismaClient.line.findMany({ include: { Stop_Line: { include: { stop: true } } } });
  }

  public async findAllStops(id: number): Promise<Stop[]> {
    const data = await this.prismaClient.stop_Line.findMany({
      where: { id_line: id },
      select: { stop: true },
    });

    return data.map((item) => {
      return item.stop;
    });
  }
}
