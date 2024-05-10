import { Request, Response } from "express";
import { inject, injectable } from "inversify";
import { TYPES } from "../types";
import { Product } from "../models/product.model";
import { ProductService } from "../services/product.service";
import { catchError } from "../utils/error.handler";
import { SuccessResponse } from "../dtos/common.dto";
import { loginRequired, roleRequired } from "../utils/auth.helper";

@injectable()
export class ProductController {
  constructor(
    @inject(TYPES.ProductService)
    private productService: ProductService
  ) {}

  @catchError
  @loginRequired
  async createProduct(req: any, res: Response): Promise<void> {
    const product: Product = await this.productService.createProduct(req);
    res.status(201).json(product);
  }

  @catchError
  // @loginRequired
  // @roleRequired("customer")
  async getProducts(req: any, res: Response): Promise<void> {
    const products: Product = await this.productService.getProducts(req);
    res.json(new SuccessResponse("S-10001", products));
  }

  @catchError
  // @loginRequired
  // @roleRequired("customer")
  async getProduct(req: any, res: Response): Promise<void> {
    const products: Product = await this.productService.getProduct(req);
    res.json(new SuccessResponse("S-10001", products));
  }
}
