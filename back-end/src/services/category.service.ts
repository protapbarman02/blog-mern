export interface CategoryService {
  createCategory(req: any): Promise<any>;
  getCategories(req: any): Promise<any>;
}
