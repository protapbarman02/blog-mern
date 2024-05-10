import container from "./inversify.config";
import { UserController } from "../controllers/user.controller";
import { RoleController } from "../controllers/role.controller";
import { AuthController } from "../controllers/auth.controller";
import { PostController } from "../controllers/post.controller";
import { CommentController } from "../controllers/comment.controller";
import { LikeController } from "../controllers/like.controller";

export const resolveControllers = () => {
  return {
    userController: container.resolve<UserController>(UserController),
    roleController: container.resolve<RoleController>(RoleController),
    authController: container.resolve<AuthController>(AuthController),
    postController: container.resolve<PostController>(PostController),
    commentController: container.resolve<CommentController>(CommentController),
    likeController: container.resolve<LikeController>(LikeController),
  };
};
