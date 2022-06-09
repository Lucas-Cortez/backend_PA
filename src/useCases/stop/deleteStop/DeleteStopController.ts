import { Request, Response } from "express";
import { DeleteStopUseCase } from "./DeleteStopUseCase";

export class DeleteStopController {
  constructor(private deleteStopUseCase: DeleteStopUseCase) {}

  public async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.body;
    const data = await this.deleteStopUseCase.execute(id);
    return response.status(200).json(data);
  }
}
