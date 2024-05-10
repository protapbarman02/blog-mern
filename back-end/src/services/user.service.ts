export interface UserService {
  createUser(req: any): Promise<any>;
  getUsers(req: any): Promise<any>;
}
