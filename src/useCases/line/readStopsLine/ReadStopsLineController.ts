import { Request, Response } from "express";
import { ReadStopsLineUseCase } from "./ReadStopsLineUseCase";

export class ReadStopsLineController {
  constructor(private readStopsLineUseCase: ReadStopsLineUseCase) {}

  public async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const data = await this.readStopsLineUseCase.execute(parseInt(id));
    return response.status(200).json(data);
  }
}
