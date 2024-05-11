import express, { Router } from "express";
import { resolveControllers } from "../utils/controller.resolver";

const router: Router = express.Router();
const { likeController } = resolveControllers();

router.post("/", likeController.createLike.bind(likeController));
router.get("/", likeController.getLikes.bind(likeController));
router.get("/:id", likeController.getLike.bind(likeController));
router.patch("/:id", likeController.updateActiveStatus.bind(likeController));
router.delete("/:id", likeController.delete.bind(likeController));
router.get("/post/:id/", likeController.getByPostId.bind(likeController));

export default router;
