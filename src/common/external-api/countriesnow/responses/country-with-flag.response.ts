import { BaseResponse } from './base-response';

export class CountryWithFlagResponse extends BaseResponse {
  data: {
    name: string;
    flag: string;
    iso2: string;
    iso3: string;
  };
}
