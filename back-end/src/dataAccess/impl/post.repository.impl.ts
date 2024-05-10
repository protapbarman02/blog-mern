import { Post } from "../../models/post.model";
import { BaseRepositoryImpl } from "./base.repository.impl";
import { PostRepository } from "../post.repository";

export class PostRepositoryImpl
  extends BaseRepositoryImpl<Post>
  implements PostRepository
{
  constructor(entity: any) {
    super(entity);
  }
}