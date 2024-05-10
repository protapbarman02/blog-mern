import { Product } from "../models/product.model";
import { BaseRepository } from "./base.repository";

export interface ProductRepository extends BaseRepository<Product> {}
