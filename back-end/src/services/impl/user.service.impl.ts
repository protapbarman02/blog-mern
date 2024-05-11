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
    return await this.repo.users.create(data);
  }

  async getUsers(req: any): Promise<any> {
    const res: any = await this.repo.users.get(req);

    const userPromises: Promise<any>[] = res.data.map(
      async(user: any) => {

        const roles: any = await this.repo.roles.getRoleByUserId(user.id);

        return new GetUserResDto(
          user._id, 
          user.first_name, 
          user.last_name, 
          user.age, 
          user.bio, 
          user.profile_pic, 
          user.email, 
          user.password, 
          user.created_at,
          user.is_active,
          roles,
          `${req.originalUrl.split("?")[0].replace(/^\/api\//, "/")}/${user._id}`
        )
      }
    );
    const users = await Promise.all(userPromises);
    return { users, ...res.page_info };
  }

  
  async getUser(req: any): Promise<any> {
    const res: any = await this.repo.users.getById(req.params.id);
    const roles: string[] = await this.repo.roles.getRoleByUserId(req.params.id);
    const user : GetUserResDto = new GetUserResDto(
      res._id, 
      res.first_name, 
      res.last_name, 
      res.age, 
      res.bio, 
      res.profile_pic, 
      res.email, 
      res.password, 
      res.created_at,
      res.is_active,
      roles,
      `${req.originalUrl.split("?")[0].replace(/^\/api\//, "/")}`
    )
    return user;
  }
  
  async updateActiveStatus(req: any): Promise<any> {
    const user: any = await this.repo.users.updateActiveStatus(req.params.id, req.body.is_active);
    return user;
  }

  async delete(req: any): Promise<any> {
    const user: any = await this.repo.users.delete(req.params.id);
    return user;
  }
  
  async update(req: any): Promise<any> {
    const data: User = req.body;
    data.updated_by = req.user.userId;
    data.updated_at = new Date();
    const user: any = await this.repo.users.update(data);
    return user;
  }
}
