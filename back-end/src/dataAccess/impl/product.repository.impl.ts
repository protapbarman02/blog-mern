import { Product } from "../../models/product.model";
import { BaseRepositoryImpl } from "./base.repository.impl";
import { ProductRepository } from "../product.repository";

export class ProductRepositoryImpl
  extends BaseRepositoryImpl<Product>
  implements ProductRepository
{
  constructor(entity: any) {
    super(entity);
  }
}
