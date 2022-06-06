import { Request, Response } from "express";
import { CreateBusUseCase } from "./CreateBusUseCase";

export class CreateBusController {
  constructor(private createBusUseCase: CreateBusUseCase) {}

  public async handle(request: Request, response: Response): Promise<Response> {
    const { capacity, height, width, length, weight, model } = request.body;

    const bus = await this.createBusUseCase.execute({ capacity, height, width, length, weight, model });

    return response.status(200).json(bus);
  }
}
