import mongoose, { Schema, Document } from "mongoose";
import { User } from "./user.model";

export interface Demo extends Document {
  name: string;
  created_by: Schema.Types.ObjectId | User;
}

const demoSchema: Schema = new Schema({
  name: { type: String, required: true },
  created_by: { type: Schema.Types.ObjectId, ref: "User", required: true },
});

export default mongoose.model<Demo>("Demo", demoSchema);
