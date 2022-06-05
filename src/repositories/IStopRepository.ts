import { Stop } from "@prisma/client";
import { ICreateStopDTO } from "../useCases/stop/createStop/ICreateStopDTO";

export interface IStopRepository {
  create(stop: ICreateStopDTO): Promise<Stop>;

  findAll(): Promise<Stop[]>;
}
