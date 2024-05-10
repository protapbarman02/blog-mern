import express, { Router } from "express";
import { resolveControllers } from "../utils/controller.resolver";

const router: Router = express.Router();
const { roleController } = resolveControllers();

router.post("/", roleController.createRole.bind(roleController));
router.get("/", roleController.getRoles.bind(roleController));

export default router;
