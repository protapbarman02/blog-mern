import { User } from "../models/user.model";
import { BaseRepository } from "./base.repository";

export interface UserRepository extends BaseRepository<User> {
  getByEmail(email: string): Promise<User>;
}
