import express, { Router } from "express";
import { resolveControllers } from "../utils/controller.resolver";

const router: Router = express.Router();
const { authController } = resolveControllers();

router.post("/login", authController.login.bind(authController));

export default router;
