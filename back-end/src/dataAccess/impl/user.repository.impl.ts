import { User } from "../../models/user.model";
import { BaseRepositoryImpl } from "./base.repository.impl";
import { UserRepository } from "../user.repository";

export class UserRepositoryImpl
  extends BaseRepositoryImpl<User>
  implements UserRepository
{
  constructor(entity: any) {
    super(entity);
  }

  async getByEmail(email: string): Promise<User> {
    const user: User = await this.entity.findOne({ email });
    return user;
  }
}
