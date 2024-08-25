export interface RoleService {
  createRole(req: any): Promise<any>;
  getRoles(req: any): Promise<any>;
  getRole(req: any): Promise<any>;
  updateActiveStatus(req: any): Promise<any>;
  delete(req: any): Promise<any>;
  deleteRolesByUserId(req: any): Promise<any>;
  update(req: any): Promise<any>;
  getRoleByUserId(req: any): Promise<any>;
  getRolesByUserIdFullData(req: any): Promise<any>;
}
