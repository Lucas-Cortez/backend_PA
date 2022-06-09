import { Request, Response } from "express";
import { DeleteLineUseCase } from "./DeleteLineUseCase";

export class DeleteLineController {
  constructor(private deleteLineUseCase: DeleteLineUseCase) {}

  public async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.body;
    const data = await this.deleteLineUseCase.execute(id);
    return response.status(200).json(data);
  }
}
