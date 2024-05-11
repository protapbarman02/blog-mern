import { Comment } from "../models/comment.model";
import { BaseRepository } from "./base.repository";

export interface CommentRepository extends BaseRepository<Comment> {
    getByPostId(req: any): Promise<any>;
    getAllByPostId(postId: any): Promise<any>;

}
