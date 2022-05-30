import { User } from "@prisma/client";
import { Request, Response } from "express";
import { CreateUserUseCase } from "./createUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  public async handle(request: Request, response: Response): Promise<User> {
    return { name: "Lucas", email: "teste@gmail.com", id: 1, hash: "fapwojfabe121ud-b1d-0dn" };
  }
}
