import { Request, Response } from "express";
import { CalculateNewLineUseCase } from "./CalculateNewLineUseCase";

export class CalculateNewLineController {
  constructor(private calculateNewLineUseCase: CalculateNewLineUseCase) {}

  public async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const data = await this.calculateNewLineUseCase.execute(parseInt(id));
    return response.status(200).json(data);
  }
}
