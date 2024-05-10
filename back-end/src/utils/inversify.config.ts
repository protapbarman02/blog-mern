import "reflect-metadata";
import { Container } from "inversify";
import { TYPES } from "../types";

import { Repositories } from "../dataAccess/repositories";
import { RepositoriesImpl } from "../dataAccess/impl/repositories.impl";

import { UserService } from "../services/user.service";
import { UserServiceImpl } from "../services/impl/user.service.impl";
import { RoleServiceImpl } from "../services/impl/role.service.impl";
import { RoleService } from "../services/role.service";
import { AuthService } from "../services/auth.service";
import { AuthServiceImpl } from "../services/impl/auth.service.impl";
import { PostService } from "../services/post.service";
import { PostServiceImpl } from "../services/impl/post.service.impl";
import { CommentService } from "../services/comment.service";
import { CommentServiceImpl } from "../services/impl/comment.service.impl";
import { LikeService } from "../services/like.service";
import { LikeServiceImpl } from "../services/impl/like.service.impl";

const container = new Container();

// repository
container.bind<Repositories>(TYPES.Repositories).to(RepositoriesImpl);

// services
container.bind<UserService>(TYPES.UserService).to(UserServiceImpl);
container.bind<RoleService>(TYPES.RoleService).to(RoleServiceImpl);
container.bind<AuthService>(TYPES.AuthService).to(AuthServiceImpl);
container.bind<PostService>(TYPES.PostService).to(PostServiceImpl);
container.bind<CommentService>(TYPES.CommentService).to(CommentServiceImpl);
container.bind<LikeService>(TYPES.LikeService).to(LikeServiceImpl);

export default container;
