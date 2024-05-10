import { Request, Response } from "express";
import { inject, injectable } from "inversify";
import { TYPES } from "../types";
import { User } from "../models/user.model";
import { UserService } from "../services/user.service";
import { catchError } from "../utils/error.handler";
import { SuccessResponse } from "../dtos/common.dto";
import { loginRequired, roleRequired } from "../utils/auth.helper";

@injectable()
export class UserController {
  constructor(
    @inject(TYPES.UserService)
    private userService: UserService
  ) {}

  @catchError
  async createUser(req: any, res: Response): Promise<void> {
    const user: User = await this.userService.createUser(req);
    res.status(201).json(user);
  }

  @catchError
  // @loginRequired
  // @roleRequired("admin")
  async getUsers(req: any, res: Response): Promise<void> {
    const users: any = await this.userService.getUsers(req);
    res.json(new SuccessResponse("S-10001", users));
  }
}
