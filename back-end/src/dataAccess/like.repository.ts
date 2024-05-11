import { Like } from "../models/like.model";
import { BaseRepository } from "./base.repository";

export interface LikeRepository extends BaseRepository<Like> {
    getByPostId(id: any): Promise<Like[]>;
}
