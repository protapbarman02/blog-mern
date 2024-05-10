import { IsNumber, IsString, IsBoolean, IsArray, IsDate } from "class-validator";

export class GetLikeResDto {
  @IsString()
  public _id: string;

  @IsString()
  public user: string;

  @IsString()
  public post: string;

  @IsDate()
  public created_at : Date

  @IsBoolean()
  public is_active : Boolean

  constructor(_id:string, user: string, post: string, created_at:Date, is_active:Boolean) {
    this._id = _id,
    this.user = user;
    this.post = post;
    this.created_at = created_at;
    this.is_active = is_active;
  }
}
