import { RoleRepository } from "./role.repository";
import { UserRepository } from "./user.repository";
import { PostRepository } from "./post.repository";
import { CommentRepository } from "./comment.repository";
import { LikeRepository } from "./like.repository";

export interface Repositories {
  users: UserRepository;
  roles: RoleRepository;
  posts: PostRepository;
  comments: CommentRepository;
  likes: LikeRepository;
}
