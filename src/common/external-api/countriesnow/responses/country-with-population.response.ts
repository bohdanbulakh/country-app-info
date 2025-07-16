import { PopulationResponse } from './population.response';
import { BaseResponse } from './base-response';

export class CountryWithPopulationResponse extends BaseResponse {
  data: {
    country: string;
    code: string;
    iso3: string;
    populationCounts: PopulationResponse[],
  };
}
