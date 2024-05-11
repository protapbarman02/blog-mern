import { IsNumber, IsString, IsBoolean, IsArray, IsDate, IsObject } from "class-validator";

export class GetPostResDto {
  @IsString()
  public _id: string;

  @IsString()
  public author: string;

  @IsArray()
  public images: string[];

  @IsObject()
  public comments: object;

  @IsObject()
  public likes: object;

  @IsString()
  public title: string;

  @IsString()
  public content: string;

  @IsDate()
  public created_at : Date

  @IsBoolean()
  public is_active : Boolean
  
  @IsString()
  public url: string;

  constructor(_id:string, author: string,  title: string, content: string, images: string[], created_at:Date, is_active:Boolean, url : string, comments:object, likes:object) {
    this._id = _id,
    this.author = author;
    this.content = content;
    this.images = images;
    this.comments = comments;
    this.likes = likes;
    this.title = title;
    this.created_at = created_at;
    this.is_active = is_active;
    this.url = url;
  }
}
