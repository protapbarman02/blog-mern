import container from "./inversify.config";
import { ProductController } from "../controllers/product.controller";
import { CategoryController } from "../controllers/category.controller";
import { UserController } from "../controllers/user.controller";
import { RoleController } from "../controllers/role.controller";
import { AuthController } from "../controllers/auth.controller";
import { DemoController } from "../controllers/demo.controller";
import { PostController } from "../controllers/post.controller";
import { CommentController } from "../controllers/comment.controller";
import { LikeController } from "../controllers/like.controller";

export const resolveControllers = () => {
  return {
    productController: container.resolve<ProductController>(ProductController),
    categoryController: container.resolve<CategoryController>(CategoryController),
    userController: container.resolve<UserController>(UserController),
    roleController: container.resolve<RoleController>(RoleController),
    authController: container.resolve<AuthController>(AuthController),
    demoController: container.resolve<DemoController>(DemoController),
    postController: container.resolve<PostController>(PostController),
    commentController: container.resolve<CommentController>(CommentController),
    likeController: container.resolve<LikeController>(LikeController),
  };
};
