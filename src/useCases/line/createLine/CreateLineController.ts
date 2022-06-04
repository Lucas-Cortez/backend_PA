import { Request, Response } from "express";
import { CreateLineUseCase } from "./CreateLineUseCase";

export class CreateLineController {
  constructor(private createLineUseCase: CreateLineUseCase) {}

  public async handle(request: Request, response: Response): Promise<Response> {
    const { name, description = null, stops } = request.body;

    const newLine = await this.createLineUseCase.execute({ name, description, stops });

    return response.status(200).json(newLine);
  }
}
