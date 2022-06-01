import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  public async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    console.log(this);
    console.log({ name, email, password });
    const user = await this.createUserUseCase.execute({ name, email, password });

    return response.json(user);
  }
}
