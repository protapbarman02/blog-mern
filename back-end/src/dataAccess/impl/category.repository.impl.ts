import { Category } from "../../models/category.model";
import { BaseRepositoryImpl } from "./base.repository.impl";
import { CategoryRepository } from "../category.repository";

export class CategoryRepositoryImpl
  extends BaseRepositoryImpl<Category>
  implements CategoryRepository
{
  constructor(entity: any) {
    super(entity);
  }
}
