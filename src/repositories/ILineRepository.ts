import { Line } from "@prisma/client";

export interface ILineRepository {
  create(line: string): Promise<Line>;
}
