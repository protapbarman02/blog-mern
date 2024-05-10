import { injectable, inject } from "inversify";
import { TYPES } from "../../types";
import { Role } from "../../models/role.model";
import { Repositories } from "../../dataAccess/repositories";
import { RoleService } from "../role.service";

@injectable()
export class RoleServiceImpl implements RoleService {
  constructor(
    @inject(TYPES.Repositories)
    private repo: Repositories
  ) {}

  async createRole(req: any): Promise<any> {
    const data: Role = req.body;
    return await this.repo.roles.create(data);
  }

  async getRoles(req: any): Promise<any> {
    const res: any = await this.repo.roles.get(req);
    const roles: Role[] = res.data;

    return { roles, ...res.page_info };
  }
}
