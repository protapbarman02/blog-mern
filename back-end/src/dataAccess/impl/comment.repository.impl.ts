import { Comment } from "../../models/comment.model";
import { BaseRepositoryImpl } from "./base.repository.impl";
import { CommentRepository } from "../comment.repository";

export class CommentRepositoryImpl
  extends BaseRepositoryImpl<Comment>
  implements CommentRepository
{
  constructor(entity: any) {
    super(entity);
  }
}