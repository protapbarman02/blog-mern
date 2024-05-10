import { ObjectId } from "mongoose";

export interface BaseRepository<Model> {
  create(data: Model): Promise<Model>;
  get(req: any): Promise<any>;
  getById(id: ObjectId): Promise<Model>;
  update(data: any): Promise<Model>;
  updateActiveStatus(id: ObjectId, isActive: boolean): Promise<Model>;
  delete(id: ObjectId): Promise<Model>;
}
