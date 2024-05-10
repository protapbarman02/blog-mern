import { IsNumber, IsString, IsBoolean, IsArray, IsDate } from "class-validator";
import { ObjectId, isValidObjectId } from "mongoose";

export class GetCommentResDto {
  @IsString()
  public _id: string;
  
  @IsString()
  public post: string;

  @IsString()
  public author: string;
  
  @IsString()
  public content: string;

  @IsDate()
  public created_at : Date

  @IsBoolean()
  public is_active : Boolean
  
  @IsString()
  public url: string;

  constructor(_id:string, post:string, author: string, content: string, created_at:Date, is_active:Boolean, url : string) {
    this._id = _id,
    this.post = post,
    this.author = author;
    this.content = content;
    this.created_at = created_at;
    this.is_active = is_active;
    this.url = url;
  }
}
