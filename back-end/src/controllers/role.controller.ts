import { Request, Response } from "express";
import { inject, injectable } from "inversify";
import { TYPES } from "../types";
import { Role } from "../models/role.model";
import { RoleService } from "../services/role.service";
import { catchError } from "../utils/error.handler";
import { SuccessResponse } from "../dtos/common.dto";

@injectable()
export class RoleController {
  constructor(
    @inject(TYPES.RoleService)
    private roleService: RoleService
  ) {}

  @catchError
  async createRole(req: any, res: Response): Promise<void> {
    const role: Role = await this.roleService.createRole(req);
    res.status(201).json(role);
  }

  @catchError
  async getRoles(req: any, res: Response): Promise<void> {
    const roles: Role = await this.roleService.getRoles(req);
    res.json(new SuccessResponse("S-10001", roles));
  }
}
