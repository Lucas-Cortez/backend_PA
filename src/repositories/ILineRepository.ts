import { Line } from "@prisma/client";
import { ICreateLineDTO } from "../useCases/line/createLine/ICreateLineDTO";

export interface ILineRepository {
  create(line: ICreateLineDTO): Promise<Line>;
}
