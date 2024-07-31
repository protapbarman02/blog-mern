import { Request, Response } from "express";
import { inject, injectable } from "inversify";
import { TYPES } from "../types";
import { Comment } from "../models/comment.model";
import { CommentService } from "../services/comment.service";
import { catchError } from "../utils/error.handler";
import { SuccessResponse } from "../dtos/common.dto";
import { loginRequired, roleRequired } from "../utils/auth.helper";

@injectable()
export class CommentController {
  constructor(
    @inject(TYPES.CommentService)
    private commentService: CommentService
  ) {}

  @catchError
  @loginRequired
  async createComment(req: any, res: Response): Promise<void> {
    const comment: Comment = await this.commentService.createComment(req);
    res.status(201).json(comment);
  }

  @catchError
  // @loginRequired
  // @roleRequired("customer")
  async getComments(req: any, res: Response): Promise<void> {
    const comments: Comment = await this.commentService.getComments(req);
    res.json(new SuccessResponse(200, comments));
  }

  @catchError
  // @loginRequired
  // @roleRequired("customer")
  async getComment(req: any, res: Response): Promise<void> {
    const comment: Comment = await this.commentService.getComment(req);
    res.json(new SuccessResponse(200, comment));
  }

  @catchError
  @loginRequired
  // @roleRequired("customer")
  async updateActiveStatus(req: any, res: Response): Promise<void> {
    const comment: Comment = await this.commentService.updateActiveStatus(req);
    res.json(new SuccessResponse(200, comment));
  }

  @catchError
  @loginRequired
  // @roleRequired("customer")
  async delete(req: any, res: Response): Promise<void> {
    const comment: Comment = await this.commentService.delete(req);
    res.json(new SuccessResponse(200, comment));
  }
  
  @catchError
  @loginRequired
  // @roleRequired("customer")
  async update(req: any, res: Response): Promise<void> {
    const comment: Comment = await this.commentService.update(req);
    res.json(new SuccessResponse(200, comment));
  }

  @catchError
  // @loginRequired
  // @roleRequired("customer")
  async getByPostId(req: any, res: Response): Promise<void> {
    const comments: any = await this.commentService.getByPostId(req);
    res.json(new SuccessResponse(200, comments));
  }
}
