import express, { Router } from "express";
import { resolveControllers } from "../utils/controller.resolver";

const router: Router = express.Router();
const { likeController } = resolveControllers();

router.post("/", likeController.createLike.bind(likeController));
router.get("/:id", likeController.getLike.bind(likeController));
router.get("/", likeController.getLikes.bind(likeController));

export default router;
