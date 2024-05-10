import mongoose, { Schema, Document } from "mongoose";
import { User } from "./user.model";

export interface Product extends Document {
  name: string;
  price: number;
  created_by: Schema.Types.ObjectId | User;
}

const productSchema: Schema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  created_by: { type: Schema.Types.ObjectId, ref: "users", required: true },
});

export default mongoose.model<Product>("Product", productSchema);
