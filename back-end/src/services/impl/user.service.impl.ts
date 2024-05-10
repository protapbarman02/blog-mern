import { injectable, inject } from "inversify";
import { TYPES } from "../../types";
import { User } from "../../models/user.model";
import { Repositories } from "../../dataAccess/repositories";
import { UserService } from "../user.service";
import { GetUserResDto } from "../../dtos/user.dto";

@injectable()
export class UserServiceImpl implements UserService {
  constructor(
    @inject(TYPES.Repositories)
    private repo: Repositories
  ) {}

  async createUser(req: any): Promise<any> {
    const data: User = req.body;
    data.created_at = new Date();
    // data.created_by = req.user.userId ? req.user.userId: null ;
    return await this.repo.users.create(data);
  }

  async getUsers(req: any): Promise<any> {
    const res: any = await this.repo.users.get(req);
    const users: GetUserResDto[] = res.data; /*.map(
      (user: any) => new GetUserResDto(user.name, user.age, user.is_active)
    );*/

    return { users, ...res.page_info };
  }
}
