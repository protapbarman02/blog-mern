import mongoose, { Schema, Document } from "mongoose";
import { User } from './user.model';

export interface Role extends Document {
  user_id: string;
  role: string;
  is_active: boolean;
  created_at : Date;
  created_by : Schema.Types.ObjectId | User;
  updated_at : Date;
  updated_by : Schema.Types.ObjectId | User;
}

const roleSchema: Schema = new Schema({
  user_id: { type: String, required: true },
  role: { type: String, required: true },
  is_active: { type: Boolean, required: true, default: true },
  created_at : { type : Date, default : Date.now },
  created_by : { type: Schema.Types.ObjectId, ref: "users", required : true },
  updated_at : { type : Date },
  updated_by : { type: Schema.Types.ObjectId, ref: "users" },
});

export default mongoose.model<Role>("Role", roleSchema);
