import { Request, Response } from "express";
import { inject, injectable } from "inversify";
import { TYPES } from "../types";
import { Category } from "../models/category.model";
import { CategoryService } from "../services/category.service";
import { catchError } from "../utils/error.handler";
import { SuccessResponse } from "../dtos/common.dto";
import { loginRequired, roleRequired } from "../utils/auth.helper";

@injectable()
export class CategoryController {
  constructor(
    @inject(TYPES.CategoryService)
    private categoryService: CategoryService
  ) {}

  @catchError
  async createCategory(req: any, res: Response): Promise<void> {
    const category: Category = await this.categoryService.createCategory(req);
    res.status(201).json(category);
  }

  @catchError
  @loginRequired
  @roleRequired("admin", "customer")
  async getCategories(req: any, res: Response): Promise<void> {
    const categories: Category = await this.categoryService.getCategories(req);
    res.json(new SuccessResponse("S-10001", categories));
  }
}
