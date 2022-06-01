import { User } from "@prisma/client";
import { IUserRepository } from "../../../repositories/IUserRepository";
import { ICreateUserDTO } from "./ICreateUserDTO";

export class CreateUserUseCase {
  constructor(private prismaUserRepository: IUserRepository) {}

  public async execute(data: ICreateUserDTO): Promise<User> {
    console.log(data);
    const { password, ...rest } = data;

    const hash = `hashed ${password}`;
    const user = { ...rest, hash };

    const userCreated = await this.prismaUserRepository.create(user);
    return userCreated;
  }
}
