import { User } from "@prisma/client";
import { ICreateUserDTO } from "../useCases/user/createUser/ICreateUserDTO";

export interface ICreateUserRepositoryDTO extends Omit<ICreateUserDTO, "password"> {
  hash: string;
}

export interface IUserRepository {
  create(user: ICreateUserRepositoryDTO): Promise<User>;
}
