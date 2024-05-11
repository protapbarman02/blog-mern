import express, { Router } from "express";
import { resolveControllers } from "../utils/controller.resolver";

const router: Router = express.Router();
const { roleController } = resolveControllers();

router.post("/", roleController.createRole.bind(roleController));
router.get("/", roleController.getRoles.bind(roleController));
router.get("/:id", roleController.getRole.bind(roleController));
router.patch("/:id", roleController.updateActiveStatus.bind(roleController));
router.delete("/:id", roleController.delete.bind(roleController));
router.put("", roleController.update.bind(roleController));
router.get("/user/:id", roleController.getRoleByUserId.bind(roleController))

export default router;
