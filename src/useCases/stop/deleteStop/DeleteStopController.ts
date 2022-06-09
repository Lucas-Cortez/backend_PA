import { Request, Response } from "express";

export class DeleteStopController {
  constructor() {}

  public async handle(request: Request, response: Response): Promise<Response> {
    return response.status(200).json();
  }
}
