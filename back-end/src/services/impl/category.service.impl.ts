import { injectable, inject } from "inversify";
import { TYPES } from "../../types";
import { Category } from "../../models/category.model";
import { Repositories } from "../../dataAccess/repositories";
import { CategoryService } from "../category.service";

@injectable()
export class CategoryServiceImpl implements CategoryService {
  constructor(
    @inject(TYPES.Repositories)
    private repo: Repositories
  ) {}

  async createCategory(req: any): Promise<any> {
    const data: Category = req.body;
    return await this.repo.categories.create(data);
  }

  async getCategories(req: any): Promise<any> {
    const res: any = await this.repo.categories.get(req);
    const categories: Category[] = res.data;

    return { categories, ...res.page_info };
  }
}
