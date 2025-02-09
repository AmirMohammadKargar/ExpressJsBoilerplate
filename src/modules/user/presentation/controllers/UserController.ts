import { Request, Response } from "express";
import { ICreateUserDTO } from "../../application/dtos/ICreateUserDto";
import { IUpdateUserDTO } from "../../application/dtos/IUpdateUserDto";
import { UserService } from "./../../application/UserService";

export class UserController {
  constructor(private userService: UserService) {}

  async findUser(req: Request, res: Response) {
    const response = await this.userService.getUserById(req.params.id);
    res.status(response.success ? 200 : 400).json(response);
  }

  async updateUser(req: Request, res: Response) {
    const updateUserDto = <IUpdateUserDTO>{
      name: req.body.name,
      email: req.body.email,
    };
    const response = await this.userService.updateUser(
      req.params.id,
      updateUserDto
    );
    res.status(response.success ? 200 : 400).json(response);
  }

  async createUser(req: Request, res: Response) {
    const createUserDto = <ICreateUserDTO>{
      name: req.body.name,
      email: req.body.email,
    };
    const response = await this.userService.createUser(createUserDto);
    if (response.data) res.status(201).json(response);
    else res.status(400).json(response);
  }
}
