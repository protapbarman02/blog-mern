import express, { Router } from "express";
import { resolveControllers } from "../utils/controller.resolver";

const router: Router = express.Router();
const { userController } = resolveControllers();

router.post("/", userController.createUser.bind(userController));
router.get("/", userController.getUsers.bind(userController));
router.get("/:id", userController.getUser.bind(userController));
router.patch("/:id", userController.updateActiveStatus.bind(userController));
router.delete("/:id", userController.delete.bind(userController));

export default router;
