import { injectable } from "inversify";

// import models
import userModel from "../../models/user.model";
import postModel from "../../models/post.model";
import roleModel from "../../models/role.model";
import commentModel from "../../models/comment.model";
import likeModel from "../../models/like.model";

// import repo
import { Repositories } from "../repositories";
import { UserRepository } from "../user.repository";
import { PostRepository } from "../post.repository";
import { RoleRepository } from "../role.repository";
import { CommentRepository } from "../comment.repository";
import { LikeRepository } from "../like.repository";

// import repo implementations
import { UserRepositoryImpl } from "./user.repository.impl";
import { RoleRepositoryImpl } from "./role.repository.impl";
import { PostRepositoryImpl } from "./post.repository.impl";
import { CommentRepositoryImpl } from "./comment.repository.impl";
import { LikeRepositoryImpl } from "./like.repository.impl";

@injectable()
export class RepositoriesImpl implements Repositories {
  constructor() {
    this.users = new UserRepositoryImpl(userModel);
    this.roles = new RoleRepositoryImpl(roleModel);
    this.posts=new PostRepositoryImpl(postModel);
    this.comments=new CommentRepositoryImpl(commentModel);
    this.likes=new LikeRepositoryImpl(likeModel);
  }
  roles: RoleRepository;
  users: UserRepository;
  posts: PostRepository;
  comments: CommentRepository;
  likes: LikeRepository;
}
