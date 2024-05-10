import { injectable, inject } from "inversify";
import { TYPES } from "../../types";
import { Role } from "../../models/role.model";
import { Repositories } from "../../dataAccess/repositories";
import { RoleService } from "../role.service";
import { GetRoleResDto } from "../../dtos/role.dto";

@injectable()
export class RoleServiceImpl implements RoleService {
  constructor(
    @inject(TYPES.Repositories)
    private repo: Repositories
  ) {}

  async createRole(req: any): Promise<any> {
    const data: Role = req.body;
    data.created_by = req.user.userId;
    data.created_at = new Date();
    return await this.repo.roles.create(data);
  }

  async getRoles(req: any): Promise<any> {
    const res: any = await this.repo.roles.get(req);
    const roles: Role[] = res.data.map(
      (role : any) =>
        new GetRoleResDto(
          role._id,
          role.user_id,
          role.role,
          role.created_at,
          role.is_active
        )
    );

    return { roles, ...res.page_info };
  }

  async getRole(req: any): Promise<any> {
    const res: any = await this.repo.roles.getById(req.params.id);
    const role : GetRoleResDto = new GetRoleResDto(
      res._id,
      res.user_id,
      res.role,
      res.created_at,
      res.is_active
    )
    return role;
  }
  
  async updateActiveStatus(req: any): Promise<any> {
    const role: any = await this.repo.roles.updateActiveStatus(req.params.id, req.body.is_active);
    return role;
  }

  async delete(req: any): Promise<any> {
    const role: any = await this.repo.roles.delete(req.params.id);
    return role;
  }

  async update(req: any): Promise<any> {
    const data: Role = req.body;
    data.updated_by = req.user.userId;
    data.updated_at = new Date();
    const role: any = await this.repo.roles.update(data);
    return role;
  }

}
