import express, { Router } from "express";
import { resolveControllers } from "../utils/controller.resolver";

const router: Router = express.Router();
const { postController } = resolveControllers();

router.post("/", postController.createPost.bind(postController));
router.get("/:id", postController.getPost.bind(postController));
router.get("/", postController.getPosts.bind(postController));

export default router;
