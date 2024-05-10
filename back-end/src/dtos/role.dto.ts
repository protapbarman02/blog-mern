import { IsNumber, IsString, IsBoolean, IsArray, IsDate } from "class-validator";

export class GetRoleResDto {
  @IsString()
  public _id: string;

  @IsString()
  public user_id: string;

  @IsString()
  public role: string;
  
  @IsBoolean()
  public is_active : Boolean

  @IsDate()
  public created_at : Date


  constructor(_id:string, user_id: string, role: string, created_at:Date, is_active:Boolean) {
    this._id = _id,
    this.user_id = user_id;
    this.role = role;
    this.is_active = is_active;
    this.created_at = created_at;
  }
}
