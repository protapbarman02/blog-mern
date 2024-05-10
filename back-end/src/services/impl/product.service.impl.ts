import { injectable, inject } from "inversify";
import { TYPES } from "../../types";
import { Product } from "../../models/product.model";
import { Repositories } from "../../dataAccess/repositories";
import { ProductService } from "../product.service";
import { GetProductResDto } from "../../dtos/product.dto";

@injectable()
export class ProductServiceImpl implements ProductService {
  constructor(
    @inject(TYPES.Repositories)
    private repo: Repositories
  ) {}

  async createProduct(req: any): Promise<any> {
    const data: Product = req.body;
    data.created_by = req.user.userId;
    return await this.repo.products.create(data);
  }

  async getProducts(req: any): Promise<any> {
    const res: any = await this.repo.products.get(req);
    const products: Product[] = res.data.map(
      (product: any) =>
        new GetProductResDto(
          product.name,
          product.price,
          `${req.originalUrl.split("?")[0]}/${product._id}`
        )
    );

    return { products, ...res.page_info };
  }

  async getProduct(req: any): Promise<any> {
    const product: any = await this.repo.products.getById(req.params.id);
    return product;
  }
}
