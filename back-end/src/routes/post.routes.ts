import express, { Router } from "express";
import { resolveControllers } from "../utils/controller.resolver";

const router: Router = express.Router();
const { postController } = resolveControllers();

router.post("/", postController.createPost.bind(postController));
router.get("/", postController.getPosts.bind(postController));
router.get("/:id", postController.getPost.bind(postController));
router.patch("/:id", postController.updateActiveStatus.bind(postController));
router.delete("/:id", postController.delete.bind(postController));
router.put("/", postController.update.bind(postController));
router.get("/:id/comments", postController.getCommentsByPostId.bind(postController));
router.get("/:id/likes", postController.getLikesByPostId.bind(postController));

export default router;
