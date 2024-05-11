import { Like } from "../../models/like.model";
import { BaseRepositoryImpl } from "./base.repository.impl";
import { LikeRepository } from "../like.repository";
import { ObjectId } from "mongoose";

export class LikeRepositoryImpl
  extends BaseRepositoryImpl<Like>
  implements LikeRepository
{
  constructor(entity: any) {
    super(entity);
  }

  async getByPostId(postId: ObjectId): Promise<Like[]> {
    const likes: Like[] = await this.entity.find({ post:postId });
    return likes;
  }
}