import { Request, Response } from "express";
import { inject, injectable } from "inversify";
import { TYPES } from "../types";
import { Demo } from "../models/demo.model";
import { DemoService } from "../services/demo.service";
import { catchError } from "../utils/error.handler";
import { SuccessResponse } from "../dtos/common.dto";
import { loginRequired, roleRequired } from "../utils/auth.helper";

@injectable()
export class DemoController {
  constructor(
    @inject(TYPES.DemoService)
    private demoService: DemoService
  ) {}

  @catchError
  @loginRequired
  async createDemo(req: any, res: Response): Promise<void> {
    const demo: Demo = await this.demoService.createDemo(req);
    res.status(201).json(demo);
  }

  @catchError
  // @loginRequired
  // @roleRequired("customer")
  async getDemos(req: any, res: Response): Promise<void> {
    const demos: Demo = await this.demoService.getDemos(req);
    res.json(new SuccessResponse("S-10001", demos));
  }

  @catchError
  // @loginRequired
  // @roleRequired("customer")
  async getDemo(req: any, res: Response): Promise<void> {
    const demos: Demo = await this.demoService.getDemo(req);
    res.json(new SuccessResponse("S-10001", demos));
  }
}
