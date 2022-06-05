import { Request, Response } from "express";
import { ReadStopsUseCase } from "./ReadStopsUseCase";

export class ReadStopsController {
  constructor(private readStopsUseCase: ReadStopsUseCase) {}

  public async handle(request: Request, response: Response): Promise<Response> {
    const stops = await this.readStopsUseCase.execute();

    return response.status(200).json(stops);
  }
}
