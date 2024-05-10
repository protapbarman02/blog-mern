import express, { Router } from "express";
import { resolveControllers } from "../utils/controller.resolver";

const router: Router = express.Router();
const { commentController } = resolveControllers();

router.post("/", commentController.createComment.bind(commentController));
router.get("/:id", commentController.getComment.bind(commentController));
router.get("/", commentController.getComments.bind(commentController));

export default router;
