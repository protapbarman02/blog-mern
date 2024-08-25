import { Request, Response } from "express";
import { inject, injectable } from "inversify";
import { TYPES } from "../types";
import { User } from "../models/user.model";
import { UserService } from "../services/user.service";
import { RoleService } from "../services/role.service";
import { catchError } from "../utils/error.handler";
import { SuccessResponse } from "../dtos/common.dto";
import { loginRequired, roleRequired } from "../utils/auth.helper";

@injectable()
export class UserController {
  constructor(
    @inject(TYPES.UserService)
    private userService: UserService,
    @inject(TYPES.RoleService)
    private roleService: RoleService
  ) { }

  @catchError
  async createUser(req: any, res: Response): Promise<void> {
    const user: User = await this.userService.createUser(req);
    const roleData = {
      body: {
        user_id: user._id,
        role: 'customer',
      },
      user:{
        userId:user._id
      }
    };
    await this.roleService.createRole(roleData);

    res.json(new SuccessResponse(201, user));
  }

  @catchError
  // @loginRequired
  // @roleRequired("admin")
  async getUsers(req: any, res: Response): Promise<void> {
    const users: any = await this.userService.getUsers(req);
    res.json(new SuccessResponse(200, users));
  }

  @catchError
  // @loginRequired
  // @roleRequired("customer")
  async getUser(req: any, res: Response): Promise<void> {
    const user: User = await this.userService.getUser(req);
    res.json(new SuccessResponse(200, user));
  }

  @catchError
  @loginRequired
  // @roleRequired("customer")
  async updateActiveStatus(req: any, res: Response): Promise<void> {
    const user: User = await this.userService.updateActiveStatus(req);
    res.json(new SuccessResponse(200, user));
  }

  @catchError
  @loginRequired
  @roleRequired("admin")
  async delete(req: any, res: Response): Promise<void> {
    const user: User = await this.userService.delete(req);
    await this.roleService.deleteRolesByUserId(user._id);
    res.json(new SuccessResponse(200, user));
  }

  @catchError
  @loginRequired
  // @roleRequired("customer")
  async update(req: any, res: Response): Promise<void> {
    const user: User = await this.userService.update(req);
    res.json(new SuccessResponse(200, user));
  }

}
