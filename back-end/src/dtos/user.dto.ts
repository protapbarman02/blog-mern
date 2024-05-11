import { IsNumber, IsString, IsBoolean, IsDate, IsArray } from "class-validator";

export class GetUserResDto {
  @IsString()
  public _id: string;

  @IsString()
  public first_name: string;

  @IsString()
  public last_name: string;

  @IsString()
  public bio: string;

  @IsString()
  public profile_pic: string;

  @IsString()
  public email: string;

  @IsString()
  public password: string;

  @IsString()
  public url: string;

  @IsNumber()
  public age: Number;

  @IsBoolean()
  public is_active: Boolean;

  @IsDate()
  public created_at : Date;

  @IsArray()
  public roles : string[];

  constructor(_id : string, first_name : string, last_name : string, age : Number, bio : string, profile_pic : string, email : string, password : string, crated_at : Date, is_active : Boolean, roles:string[], url : string) {
    this._id = _id, 
    this.first_name = first_name, 
    this.last_name = last_name, 
    this.age = age, 
    this.bio = bio, 
    this.profile_pic = profile_pic, 
    this.email = email, 
    this.password = password, 
    this.created_at = crated_at,
    this.is_active = is_active,
    this.roles = roles
    this.url = url
  }
}
