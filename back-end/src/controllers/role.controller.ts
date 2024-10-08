import { Request, Response } from "express";
import { inject, injectable } from "inversify";
import { TYPES } from "../types";
import { Role } from "../models/role.model";
import { RoleService } from "../services/role.service";
import { catchError } from "../utils/error.handler";
import { SuccessResponse } from "../dtos/common.dto";
import { loginRequired, roleRequired } from "../utils/auth.helper";

@injectable()
export class RoleController {
  constructor(
    @inject(TYPES.RoleService)
    private roleService: RoleService
  ) {}

  @catchError
  @loginRequired
  @roleRequired("admin")
  async createRole(req: any, res: Response): Promise<void> {
    const role: Role = await this.roleService.createRole(req);
    res.status(201).json(role);
  }

  @catchError
  @loginRequired
  @roleRequired("admin")
  async getRoles(req: any, res: Response): Promise<void> {
    const roles: Role = await this.roleService.getRoles(req);
    res.json(new SuccessResponse(200, roles));
  }

  
  @catchError
  @loginRequired
  @roleRequired("admin")
  async getRole(req: any, res: Response): Promise<void> {
    const role: Role = await this.roleService.getRole(req);
    res.json(new SuccessResponse(200, role));
  }

  @catchError
  @loginRequired
  @roleRequired("admin")
  async updateActiveStatus(req: any, res: Response): Promise<void> {
    const role: Role = await this.roleService.updateActiveStatus(req);
    res.json(new SuccessResponse(200, role));
  }

  @catchError
  @loginRequired
  @roleRequired("admin")
  async delete(req: any, res: Response): Promise<void> {
    const role: Role = await this.roleService.delete(req);
    res.json(new SuccessResponse(200, role));
  }

  @catchError
  @loginRequired
  @roleRequired("admin")
  async update(req: any, res: Response): Promise<void> {
    const role: Role = await this.roleService.update(req);
    res.json(new SuccessResponse(200, role));
  }

  @catchError
  @loginRequired
  @roleRequired("admin")
  async getRoleByUserId(req: any, res: Response): Promise<void> {
    const role: Role = await this.roleService.getRoleByUserId(req);
    res.json(new SuccessResponse(200, role));
  }

  @catchError
  async getRolesByUserIdFullData(req: any, res: Response): Promise<void> {
    const role: Role = await this.roleService.getRolesByUserIdFullData(req);
    res.json(new SuccessResponse(200, role));
  }

}
