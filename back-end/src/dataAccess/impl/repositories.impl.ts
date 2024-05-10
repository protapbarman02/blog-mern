import { injectable } from "inversify";

// import models
import categoryModel from "../../models/category.model";
import productModel from "../../models/product.model";
import userModel from "../../models/user.model";
import postModel from "../../models/post.model";
import roleModel from "../../models/role.model";
import demoModel from "../../models/demo.model";
import commentModel from "../../models/comment.model";
import likeModel from "../../models/like.model";

// import repo
import { Repositories } from "../repositories";
import { CategoryRepository } from "../category.repository";
import { ProductRepository } from "../product.repository";
import { UserRepository } from "../user.repository";
import { PostRepository } from "../post.repository";
import { RoleRepository } from "../role.repository";
import { DemoRepository } from "../demo.repository";
import { CommentRepository } from "../comment.repository";
import { LikeRepository } from "../like.repository";

// import repo implementations
import { ProductRepositoryImpl } from "./product.repository.impl";
import { CategoryRepositoryImpl } from "./category.repository.impl";
import { UserRepositoryImpl } from "./user.repository.impl";
import { RoleRepositoryImpl } from "./role.repository.impl";
import { DemoRepositoryImpl } from "./demo.repository.impl";
import { PostRepositoryImpl } from "./post.repository.impl";
import { CommentRepositoryImpl } from "./comment.repository.impl";
import { LikeRepositoryImpl } from "./like.repository.impl";

@injectable()
export class RepositoriesImpl implements Repositories {
  constructor() {
    this.products = new ProductRepositoryImpl(productModel);
    this.categories = new CategoryRepositoryImpl(categoryModel);
    this.users = new UserRepositoryImpl(userModel);
    this.roles = new RoleRepositoryImpl(roleModel);
    this.demo=new DemoRepositoryImpl(demoModel);
    this.posts=new PostRepositoryImpl(postModel);
    this.comments=new CommentRepositoryImpl(commentModel);
    this.likes=new LikeRepositoryImpl(likeModel);
  }
  demo: DemoRepository;
  roles: RoleRepository;
  products: ProductRepository;
  categories: CategoryRepository;
  users: UserRepository;
  posts: PostRepository;
  comments: CommentRepository;
  likes: LikeRepository;
}
