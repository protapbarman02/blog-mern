export interface UserService {
  createUser(req: any): Promise<any>;
  getUsers(req: any): Promise<any>;
  getUser(req: any): Promise<any>;
  updateActiveStatus(req: any): Promise<any>;
  delete(req: any): Promise<any>;
  update(req: any): Promise<any>;
}
