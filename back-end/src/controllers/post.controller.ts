import { Request, Response } from "express";
import { inject, injectable } from "inversify";
import { TYPES } from "../types";
import { Post } from "../models/post.model";
import { PostService } from "../services/post.service";
import { CommentService } from "../services/comment.service";
import { LikeService } from "../services/like.service";
import { catchError } from "../utils/error.handler";
import { SuccessResponse } from "../dtos/common.dto";
import { loginRequired, roleRequired } from "../utils/auth.helper";

@injectable()
export class PostController {
  constructor(
    @inject(TYPES.PostService)
    private postService: PostService,
    @inject(TYPES.CommentService)
    private commentService: CommentService,
    @inject(TYPES.LikeService)
    private likeService: LikeService,
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
    const posts: any = await this.postService.getPosts(req);
    res.json(new SuccessResponse(200, posts));
  }

  @catchError
  // @loginRequired
  // @roleRequired("customer")
  async getPost(req: any, res: Response): Promise<void> {
    const posts: any = await this.postService.getPost(req);
    res.json(new SuccessResponse(200, posts));
  }

  @catchError
  @loginRequired
  // @roleRequired("customer")
  async updateActiveStatus(req: any, res: Response): Promise<void> {
    const posts: Post = await this.postService.updateActiveStatus(req);
    res.json(new SuccessResponse(200, posts));
  }

  @catchError
  @loginRequired
  // @roleRequired("customer")
  async delete(req: any, res: Response): Promise<void> {
    const posts: Post = await this.postService.delete(req);
    res.json(new SuccessResponse(200, posts));
  }

  @catchError
  @loginRequired
  // @roleRequired("customer")
  async update(req: any, res: Response): Promise<void> {
    const posts: Post = await this.postService.update(req);
    res.json(new SuccessResponse(200, posts));
  }

  @catchError
  // @loginRequired
  // @roleRequired("customer")
  async getCommentsByPostId(req: any, res: Response): Promise<void> {
    const comments: any = await this.commentService.getByPostId(req);
    res.json(new SuccessResponse(200, comments));
  }

  @catchError
  // @loginRequired
  // @roleRequired("customer")
  async getLikesByPostId(req: any, res: Response): Promise<void> {
    const likes: any = await this.likeService.getByPostId(req);
    res.json(new SuccessResponse(200, likes));
  }
}

