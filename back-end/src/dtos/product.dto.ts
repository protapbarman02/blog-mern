import { IsNumber, IsString, IsBoolean } from "class-validator";

export class GetProductResDto {
  @IsString()
  public name: string;

  @IsNumber()
  public price: number;

  @IsString()
  public url: string;

  constructor(name: string, price: number, url: string) {
    this.name = name;
    this.price = price;
    this.url = url;
  }
}
