export abstract class BaseResponse {
  error: boolean;
  msg: string;
  abstract data: object;
}
