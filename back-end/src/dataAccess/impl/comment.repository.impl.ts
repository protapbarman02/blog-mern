import { Comment } from "../../models/comment.model";
import { BaseRepositoryImpl } from "./base.repository.impl";
import { CommentRepository } from "../comment.repository";
import { ObjectId } from "mongoose";

export class CommentRepositoryImpl
  extends BaseRepositoryImpl<Comment>
  implements CommentRepository
{
  constructor(entity: any) {
    super(entity);
  }

  async getByPostId(postId: ObjectId): Promise<Comment[]> {
    const comments: Comment[] = await this.entity.find({ post:postId });
    return comments;
  }
}