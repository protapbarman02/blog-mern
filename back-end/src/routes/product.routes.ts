import express, { Router } from "express";
import { resolveControllers } from "../utils/controller.resolver";

const router: Router = express.Router();
const { productController } = resolveControllers();

router.post("/", productController.createProduct.bind(productController));
router.get("/:id", productController.getProduct.bind(productController));
router.get("/", productController.getProducts.bind(productController));

export default router;
