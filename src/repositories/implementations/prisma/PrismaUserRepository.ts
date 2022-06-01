import { PrismaClient, User } from "@prisma/client";
import { ICreateUserRepositoryDTO, IUserRepository } from "../../IUserRepository";

export class PrismaUserRepository implements IUserRepository {
  constructor(private prismaClient: PrismaClient) {}

  public async create(user: ICreateUserRepositoryDTO): Promise<User> {
    const userCreated = await this.prismaClient.user.create({ data: user });
    return userCreated;
  }
}
