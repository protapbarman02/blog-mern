import { Role } from "../../models/role.model";
import { BaseRepositoryImpl } from "./base.repository.impl";
import { RoleRepository } from "../role.repository";
import { Schema } from "mongoose";

export class RoleRepositoryImpl
  extends BaseRepositoryImpl<Role>
  implements RoleRepository
{
  constructor(entity: any) {
    super(entity);
  }

  async getRoleByUserId(userId: Schema.Types.ObjectId): Promise<string[]> {
    return (
      await this.entity.find({ user_id: userId }).select("role -_id")
    ).map((result: any) => result.role);
  }
}
