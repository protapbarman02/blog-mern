import { Like } from "../../models/like.model";
import { BaseRepositoryImpl } from "./base.repository.impl";
import { LikeRepository } from "../like.repository";

export class LikeRepositoryImpl
  extends BaseRepositoryImpl<Like>
  implements LikeRepository
{
  constructor(entity: any) {
    super(entity);
  }
}