import { Request, Response } from "express";
import { inject, injectable } from "inversify";
import { TYPES } from "../types";
import { Like } from "../models/like.model";
import { LikeService } from "../services/like.service";
import { catchError } from "../utils/error.handler";
import { SuccessResponse } from "../dtos/common.dto";
import { loginRequired, roleRequired } from "../utils/auth.helper";

@injectable()
export class LikeController {
  constructor(
    @inject(TYPES.LikeService)
    private likeService: LikeService
  ) {}

  @catchError
  @loginRequired
  async createLike(req: any, res: Response): Promise<void> {
    const like: Like = await this.likeService.createLike(req);
    res.status(201).json(like);
  }

  @catchError
  // @loginRequired
  // @roleRequired("customer")
  async getLikes(req: any, res: Response): Promise<void> {
    const likes: Like = await this.likeService.getLikes(req);
    res.json(new SuccessResponse("S-10001", likes));
  }

  @catchError
  // @loginRequired
  // @roleRequired("customer")
  async getLike(req: any, res: Response): Promise<void> {
    const likes: Like = await this.likeService.getLike(req);
    res.json(new SuccessResponse("S-10001", likes));
  }

  @catchError
  @loginRequired
  // @roleRequired("customer")
  async updateActiveStatus(req: any, res: Response): Promise<void> {
    const likes: Like = await this.likeService.updateActiveStatus(req);
    res.json(new SuccessResponse("S-10001", likes));
  }

  @catchError
  @loginRequired
  // @roleRequired("customer")
  async delete(req: any, res: Response): Promise<void> {
    const likes: Like = await this.likeService.delete(req);
    res.json(new SuccessResponse("S-10001", likes));
  }

}
