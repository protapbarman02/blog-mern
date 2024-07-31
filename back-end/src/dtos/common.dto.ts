export class SuccessResponse {
  public status: string;
  public status_code: number;
  public data: Object | any;

  constructor(status_code: number, data: Object | any = null) {
    this.status = "success";
    this.status_code = status_code;
    this.data = data;
  }
}

export class ErrorResponse {
  public status: string;
  public status_code: number;
  public message:string;

  constructor(status_code: number, message:string) {
    this.status = "error";
    this.status_code = status_code;
    this.message = message;
  }
}
