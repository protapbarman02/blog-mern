import { Request, Response } from "express";
import { inject, injectable } from "inversify";
import { TYPES } from "../types";
import { AuthService } from "../services/auth.service";
import { catchError } from "../utils/error.handler";

@injectable()
export class AuthController {
  constructor(
    @inject(TYPES.AuthService)
    private authService: AuthService
  ) {}

  @catchError
  async login(req: any, res: Response): Promise<void> {
    const data: any = await this.authService.login(req);
    res.json(data);
  }
}
