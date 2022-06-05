import { PrismaClient, Stop } from "@prisma/client";
import { ICreateStopDTO } from "../../../useCases/stop/createStop/ICreateStopDTO";
import { IStopRepository } from "../../IStopRepository";

export class PrismaStopRepository implements IStopRepository {
  constructor(private prismaClient: PrismaClient) {}

  public async create(stop: ICreateStopDTO): Promise<Stop> {
    return await this.prismaClient.stop.create({ data: stop });
  }

  public async findAll(): Promise<Stop[]> {
    return await this.prismaClient.stop.findMany();
  }
}
