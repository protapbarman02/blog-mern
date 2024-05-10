import { injectable, inject } from "inversify";
import { TYPES } from "../../types";
import { Repositories } from "../../dataAccess/repositories";
import { AuthService } from "../auth.service";
import { User } from "../../models/user.model";
import { ErrorResponse, SuccessResponse } from "../../dtos/common.dto";
import jwt from "jsonwebtoken";

@injectable()
export class AuthServiceImpl implements AuthService {
  constructor(
    @inject(TYPES.Repositories)
    private repo: Repositories
  ) {}

  async login(req: any): Promise<any> {
    const email: string = req.body.email;
    const password: string = req.body.password;

    // get user by email
    const user: User = await this.repo.users.getByEmail(email);

    // check password
    if (user?.password != password) return new ErrorResponse("E-10001");

    // get user roles
    const roles: string[] = await this.repo.roles.getRoleByUserId(user.id);

    const token = jwt.sign(
      { userId: user.id, email: user.email, roles: roles },
      process.env.ACCESS_TOKEN_SECRET as string
    );

    return new SuccessResponse("S-10001", { token, user });
  }
}
