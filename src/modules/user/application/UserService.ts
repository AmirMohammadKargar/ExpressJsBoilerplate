import { userDtoMapper } from "../../../common/mappers/userMapper";
import { ApiResponse } from "../../../common/models/ApiResponse";
import { UserRepository } from "../infrastructure/UserRepository";
import { ICreateUserDTO } from "./dtos/ICreateUserDto";
import { IUpdateUserDTO } from "./dtos/IUpdateUserDto";
import { IUserResponseDTO } from "./dtos/IUserResponseDto";

export class UserService {
  constructor(private userRepo: UserRepository) {}

  async getUserById(
    id: string
  ): Promise<ApiResponse<IUserResponseDTO> | ApiResponse<undefined>> {
    const user = await this.userRepo.findById(id);
    return user
      ? new ApiResponse(true, userDtoMapper(user), "", 200)
      : new ApiResponse(false, undefined, "User not found", 404);
  }

  async createUser(
    createUserDto: ICreateUserDTO
  ): Promise<ApiResponse<IUserResponseDTO> | ApiResponse<undefined>> {
    if (await this.userRepo.findByEmail(createUserDto.email)) {
      return new ApiResponse(false, undefined, "Email Already exists!", 400);
    } else {
      const user = await this.userRepo.create(createUserDto);
      return new ApiResponse(
        true,
        userDtoMapper(user),
        "user created successfully",
        201
      );
    }
  }

  async updateUser(
    id: string,
    updateUserDto: IUpdateUserDTO
  ): Promise<ApiResponse<IUserResponseDTO> | ApiResponse<undefined>> {
    let oldUser = await this.userRepo.findById(id);
    if (!oldUser) new ApiResponse(false, undefined, "User not found", 404);

    const user = await this.userRepo.update(id, updateUserDto);
    return user
      ? new ApiResponse(true, userDtoMapper(user), "", 200)
      : new ApiResponse(false, undefined, "User not found", 404);
  }
}
