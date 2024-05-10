import { IsNumber, IsString, IsBoolean, IsArray } from "class-validator";

export class GetPostResDto {
  @IsString()
  public _id: string;

  @IsString()
  public author: string;

  @IsArray()
  public images: string[];

  @IsString()
  public title: string;


  constructor(_id:string ,author: string, images: string[], title: string) {
    this._id = _id,
    this.author = author;
    this.images = images;
    this.title = title;
  }
}
