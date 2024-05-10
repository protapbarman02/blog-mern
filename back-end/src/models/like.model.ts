import mongoose, { Schema, Document } from "mongoose";
import { User } from './user.model';
import { Post} from './post.model';

export interface Like extends Document{
    post : Schema.Types.ObjectId | Post;
    user : Schema.Types.ObjectId | User;
    created_at : Date;
    created_by : Schema.Types.ObjectId | User;
    updated_at : Date;
    updated_by : Schema.Types.ObjectId | User;
    is_active : Boolean;
}

const likeSchema : Schema = new Schema({
  user : { type: Schema.Types.ObjectId, ref: "users", required: true },
  post : { type: Schema.Types.ObjectId, ref: "posts", required: true },
  created_at : { type : Date, default : Date.now },
  created_by : { type: Schema.Types.ObjectId, ref: "users", required: true },
  updated_at : { type : Date },
  updated_by : { type: Schema.Types.ObjectId, ref: "users" },
  is_active: { type: Boolean, required: true, default: true },
})

export default mongoose.model<Like>("Like", likeSchema);