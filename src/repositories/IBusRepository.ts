import { Bus } from "@prisma/client";
import { ICreateBusDTO } from "../useCases/bus/createBus/ICreateBusDTO";

export interface IBusRepository {
  create(bus: ICreateBusDTO): Promise<Bus>;

  findAll(): Promise<Bus[]>;
}
