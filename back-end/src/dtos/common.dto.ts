export class SuccessResponse {
  public status: string;
  public status_code: string;
  public data: Object | any;

  constructor(status_code: string, data: Object | any = null) {
    this.status = "success";
    this.status_code = status_code;
    this.data = data;
  }
}

export class ErrorResponse {
  public status: string;
  public status_code: string;

  constructor(status_code: string) {
    this.status = "error";
    this.status_code = status_code;
  }
}
