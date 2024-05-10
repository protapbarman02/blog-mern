import { Request, Response } from "express";
import { inject, injectable } from "inversify";
import { TYPES } from "../types";
import { Post } from "../models/post.model";
import { PostService } from "../services/post.service";
import { catchError } from "../utils/error.handler";
import { SuccessResponse } from "../dtos/common.dto";
import { loginRequired, roleRequired } from "../utils/auth.helper";

@injectable()
export class PostController {
  constructor(
    @inject(TYPES.PostService)
    private postService: PostService
  ) {}

  @catchError
  @loginRequired
  async createPost(req: any, res: Response): Promise<void> {
    const post: Post = await this.postService.createPost(req);
    res.status(201).json(post);
  }

  @catchError
  // @loginRequired
  // @roleRequired("customer")
  async getPosts(req: any, res: Response): Promise<void> {
    const posts: Post = await this.postService.getPosts(req);
    res.json(new SuccessResponse("S-10001", posts));
  }

  @catchError
  // @loginRequired
  // @roleRequired("customer")
  async getPost(req: any, res: Response): Promise<void> {
    const posts: Post = await this.postService.getPost(req);
    res.json(new SuccessResponse("S-10001", posts));
  }

  @catchError
  // @loginRequired
  // @roleRequired("customer")
  async updateActiveStatus(req: any, res: Response): Promise<void> {
    const posts: Post = await this.postService.updateActiveStatus(req);
    res.json(new SuccessResponse("S-10001", posts));
  }

  @catchError
  // @loginRequired
  // @roleRequired("customer")
  async delete(req: any, res: Response): Promise<void> {
    const posts: Post = await this.postService.delete(req);
    res.json(new SuccessResponse("S-10001", posts));
  }
}
