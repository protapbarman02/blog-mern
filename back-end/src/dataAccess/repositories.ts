import { CategoryRepository } from "./category.repository";
import { DemoRepository } from "./demo.repository";
import { ProductRepository } from "./product.repository";
import { RoleRepository } from "./role.repository";
import { UserRepository } from "./user.repository";
import { PostRepository } from "./post.repository";
import { CommentRepository } from "./comment.repository";
import { LikeRepository } from "./like.repository";

export interface Repositories {
  products: ProductRepository;
  categories: CategoryRepository;
  users: UserRepository;
  roles: RoleRepository;
  demo: DemoRepository;
  posts: PostRepository;
  comments: CommentRepository;
  likes: LikeRepository;
}
