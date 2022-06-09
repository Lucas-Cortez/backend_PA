import { Request, Response } from "express";
import { GetBusUseCase } from "./GetBusUseCase";

export class GetBusController {
  constructor(private getBusUseCase: GetBusUseCase) {}

  public async handle(request: Request, response: Response): Promise<Response> {
    const data = await this.getBusUseCase.execute();
    return response.status(200).json(data);
  }
}
