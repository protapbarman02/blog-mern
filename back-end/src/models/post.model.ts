import mongoose, { Schema, Document } from "mongoose";
import { User } from './user.model';

export interface Post extends Document {
  title : string;
  images : [string];
  author : Schema.Types.ObjectId | User;
  created_at : Date;
  created_by : Schema.Types.ObjectId | User;
  updated_at : Date;
  updated_by : Schema.Types.ObjectId | User;
  is_active : boolean;
}

const postSchema : Schema = new Schema({
  title : { type: String, required : true },
  images : { type : [String], required : true },
  author : { type: Schema.Types.ObjectId, ref: "users", required: true },
  created_at : { type : Date, default : Date.now },
  created_by : { type: Schema.Types.ObjectId, ref: "users", required: true },
  updated_at : { type : Date },
  updated_by : { type: Schema.Types.ObjectId, ref: "users" },
  is_active: { type: Boolean, required: true, default: true },
})

export default mongoose.model<Post>("Post", postSchema);