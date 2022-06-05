import { Request, Response } from "express";
import { ReadLinesUseCase } from "./ReadLinesUseCase";

export class ReadLinesController {
  constructor(private readLinesUseCase: ReadLinesUseCase) {}

  public async handle(request: Request, response: Response): Promise<Response> {
    const lines = await this.readLinesUseCase.execute();
    return response.status(200).json(lines);
  }
}
