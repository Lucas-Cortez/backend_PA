import { Request, Response } from "express";
import { DeleteBusUseCase } from "./DeleteBusUseCase";

export class DeleteBusController {
  constructor(private deleteBusUseCase: DeleteBusUseCase) {}

  public async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.body;
    const data = await this.deleteBusUseCase.execute(id);
    return response.status(200).json(data);
  }
}
