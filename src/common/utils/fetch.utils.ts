import { BaseResponse } from '../external-api/countriesnow/responses/base-response';

export class FetchUtils {
  static addBody (value: object) {
    return {
      body: JSON.stringify(value),
      headers: {
        'Content-Type': 'application/json',
      },
    };
  }

  static async toJSON<T extends BaseResponse> (response: Response, ...validationCallbacks: ((data: any) => void)[]) {
    const parsed = (await response.json()) as T;

    for (const callback of validationCallbacks) {
      callback(parsed);
    }
    return parsed;
  }
}
