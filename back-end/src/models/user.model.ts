import mongoose, { Schema, Document } from "mongoose";

export interface User extends Document {
  first_name: string;
  last_name: string;
  age: number;
  email: string;
  password: string;
  profile_pic: string;
  bio: string;
  created_at : Date;
  created_by : Schema.Types.ObjectId | User;
  updated_at : Date;
  updated_by : Schema.Types.ObjectId | User;
  is_active: boolean;
}

const userSchema: Schema = new Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  age: { type: Number },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profile_pic : { type : String},
  bio : { type : String},
  created_at : { type : Date, default : Date.now },
  created_by : { type: Schema.Types.ObjectId, ref: "users" },
  updated_at : { type : Date },
  updated_by : { type: Schema.Types.ObjectId, ref: "users" },
  is_active: { type: Boolean, required: true, default: true },
});

export default mongoose.model<User>("User", userSchema);
