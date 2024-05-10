import express, { Router } from "express";
import { resolveControllers } from "../utils/controller.resolver";

const router: Router = express.Router();
const { categoryController } = resolveControllers();

router.post("/", categoryController.createCategory.bind(categoryController));
router.get("/", categoryController.getCategories.bind(categoryController));

export default router;
