import { Like } from "../models/like.model";
import { BaseRepository } from "./base.repository";

export interface LikeRepository extends BaseRepository<Like> {
    getByPostId(req: any): Promise<any>;
    getAllByPostId(postId: any): Promise<any>;
}
