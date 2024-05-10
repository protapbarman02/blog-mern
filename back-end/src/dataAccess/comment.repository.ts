import { Comment } from "../models/comment.model";
import { BaseRepository } from "./base.repository";

export interface CommentRepository extends BaseRepository<Comment> {
    // getCommentsByPost(id: any): Promise<Comment>;
}
