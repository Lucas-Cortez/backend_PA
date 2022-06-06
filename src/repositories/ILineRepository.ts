import { Line, Stop_Line } from "@prisma/client";
import { ICreateLineDTO } from "../useCases/line/createLine/ICreateLineDTO";

export interface ILineRepository {
  create(line: ICreateLineDTO): Promise<Line>;

  findAll(): Promise<Line[]>;

  findAllStops(id: number): Promise<Omit<Stop_Line, "id" | "order" | "id_line" | "id_stop">[] | null>;
}
