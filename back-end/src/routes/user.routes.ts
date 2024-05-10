import express, { Router } from "express";
import { resolveControllers } from "../utils/controller.resolver";

const router: Router = express.Router();
const { userController } = resolveControllers();

router.post("/", userController.createUser.bind(userController));
router.get("/", userController.getUsers.bind(userController));

export default router;
