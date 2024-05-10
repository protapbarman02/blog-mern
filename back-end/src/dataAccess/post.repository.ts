import { Post } from "../models/post.model";
import { BaseRepository } from "./base.repository";

export interface PostRepository extends BaseRepository<Post> {}
