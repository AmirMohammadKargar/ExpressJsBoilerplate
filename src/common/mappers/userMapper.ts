import { User } from "@prisma/client"; // Prisma model type
import { IUserResponseDTO } from "../../modules/user/application/dtos/IUserResponseDto";

export function userDtoMapper(user: User): IUserResponseDTO {
  return <IUserResponseDTO>{
    id: user.id,
    name: user.name,
    email: user.email,
  };
}
