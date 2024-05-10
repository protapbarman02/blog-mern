import mongoose, { Schema, Document } from 'mongoose';

export interface Category extends Document {
  name: string;
  imgUrl:string;
}

const categorySchema: Schema = new Schema({
  name: { type: String, required: true },
  imgUrl: { type: String, required: false },
});

export default mongoose.model<Category>('Category', categorySchema);
