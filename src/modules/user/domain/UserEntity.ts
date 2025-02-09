import { BaseEntity } from "../../../common/models/BaseEntity";

export class UserEntity extends BaseEntity {
  name: string;
  email: string;

  constructor(
    name: string,
    email: string,
    id?: string,
    createdAt?: Date,
    updatedAt?: Date
  ) {
    super();
    this.name = name;
    this.email = email;
    if (id) this.id = id;
    if (createdAt) this.createdAt = createdAt;
    if (updatedAt) this.updatedAt = updatedAt;
  }
}
