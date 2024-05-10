import mongoose, { Schema, Document } from "mongoose";
import { User } from './user.model';
import { Post} from './post.model';

export interface Comment extends Document{
    content : string;
    author : Schema.Types.ObjectId | User;
    post : Schema.Types.ObjectId | Post;
    created_at : Date;
    created_by : Schema.Types.ObjectId | User;
    updated_at : Date;
    updated_by : Schema.Types.ObjectId | User;
    is_active : boolean;
}

const commentSchema : Schema = new Schema({
    content : { type: String, required: true },
    author : { type: Schema.Types.ObjectId, ref: 'users', required: true },
    post : { type: Schema.Types.ObjectId, ref: 'posts', required: true },
    created_at : { type : Date, default : Date.now },
    created_by : { type: Schema.Types.ObjectId, ref: "users", required: true },
    updated_at : { type : Date },
    updated_by : { type: Schema.Types.ObjectId, ref: "users" },
    is_active : { type: Boolean, default: true }
})

export default mongoose.model<Comment>("Comment", commentSchema);