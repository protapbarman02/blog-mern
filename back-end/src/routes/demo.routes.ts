import express, { Router } from "express";
import { resolveControllers } from "../utils/controller.resolver";

const router: Router = express.Router();
const { demoController } = resolveControllers();

router.post("/", demoController.createDemo.bind(demoController));
router.get("/:id", demoController.getDemo.bind(demoController));
router.get("/", demoController.getDemos.bind(demoController));

export default router;
