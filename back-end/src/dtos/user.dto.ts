import { IsNumber, IsString, IsBoolean } from "class-validator";

export class GetUserResDto {
  @IsString()
  public name: string;

  @IsNumber()
  public age: number;

  @IsBoolean()
  public is_active: boolean;

  constructor(name: string, age: number, is_active: boolean) {
    this.name = name;
    this.age = age;
    this.is_active = is_active;
  }
}
