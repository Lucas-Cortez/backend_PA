import { Bus, PrismaClient } from "@prisma/client";
import { ICreateBusDTO } from "../../../useCases/bus/createBus/ICreateBusDTO";
import { IBusRepository } from "../../IBusRepository";

export class PrismaBusRepository implements IBusRepository {
  constructor(private prismaClient: PrismaClient) {}

  public async create(bus: ICreateBusDTO): Promise<Bus> {
    return await this.prismaClient.bus.create({ data: bus });
  }

  public async findAll(): Promise<Bus[]> {
    return await this.prismaClient.bus.findMany();
  }
}
