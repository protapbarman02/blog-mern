import { IsNumber, IsString, IsBoolean, IsArray } from "class-validator";

export class GetCmmentResDto {
  @IsString()
  public _id: string;
  
  @IsString()
  public user_id: string;

  @IsString()
  public author: string;
  
  @IsString()
  public content: string;


  constructor(_id:string, user_id:string, author: string, content: string) {
    this._id = _id,
    this.user_id = user_id,
    this.author = author;
    this.content = content;
  }
}
