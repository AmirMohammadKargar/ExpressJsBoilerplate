import { User } from "@prisma/client";
import { prisma } from "../../../startup/db";
import { ICreateUserDTO } from "../application/dtos/ICreateUserDto";
import { IUpdateUserDTO } from "../application/dtos/IUpdateUserDto";

export class UserRepository {
  async findById(id: string): Promise<User | null> {
    return prisma.user.findUnique({ where: { id } });
  }

  async findByEmail(email: string): Promise<User | null> {
    return prisma.user.findFirst({ where: { email: email } });
  }

  async create(user: ICreateUserDTO): Promise<User> {
    return prisma.user.create({ data: user });
  }

  async update(id: string, user: IUpdateUserDTO): Promise<User | null> {
    const updateData: any = {};
    if (user.name) updateData.name = user.name;
    if (user.email) updateData.email = user.email;

    return prisma.user.update({
      where: { id },
      data: updateData,
    });
  }
}
