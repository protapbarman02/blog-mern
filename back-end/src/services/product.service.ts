export interface ProductService {
  createProduct(req: any): Promise<any>;
  getProducts(req: any): Promise<any>;
  getProduct(req: any): Promise<any>;
}
