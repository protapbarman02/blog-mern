import { ObjectId } from "mongoose";
import { Role } from "../models/role.model";
import { BaseRepository } from "./base.repository";

export interface RoleRepository extends BaseRepository<Role> {
  getRoleByUserId(userId: ObjectId): Promise<string[]>;
}
