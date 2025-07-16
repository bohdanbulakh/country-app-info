export class FetchUtils {
  static addBody (value: object) {
    return {
      body: JSON.stringify(value),
      headers: {
        'Content-Type': 'application/json',
      },
    };
  }

  static async toJSON<T> (response: Response, ...validationCallbacks: ((data: any) => void)[]) {
    const parsed = (await response.json()) as T;

    for (const callback of validationCallbacks) {
      callback(parsed);
    }
    return parsed;
  }
}
