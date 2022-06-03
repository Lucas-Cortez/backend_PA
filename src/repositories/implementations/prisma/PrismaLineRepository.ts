import { Line, PrismaClient } from "@prisma/client";
import { ILineRepository } from "../../ILineRepository";

export class PrismaLineRepository implements ILineRepository {
  constructor(private prismaClient: PrismaClient) {}

  public async create(line: string): Promise<Line> {
    return;
  }
}
