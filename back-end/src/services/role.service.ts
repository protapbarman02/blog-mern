export interface RoleService {
  createRole(req: any): Promise<any>;
  getRoles(req: any): Promise<any>;
}
