import { Request, Response } from "express";
import { CreateStopUseCase } from "./CreateStopUseCase";

export class CreateStopController {
  constructor(private createStopUseCase: CreateStopUseCase) {}

  public async handle(request: Request, response: Response): Promise<Response> {
    const { name, latitude, longitude } = request.body;

    const stop = await this.createStopUseCase.execute({ name, latitude, longitude });

    return response.status(200).json(stop);
  }
}
