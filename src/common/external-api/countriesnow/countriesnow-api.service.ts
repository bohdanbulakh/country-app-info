import { ConfigurationService } from '../../../config/configuration-service';
import { BadRequestException, Injectable } from '@nestjs/common';
import { CountryWithPopulationResponse } from './responses/country-with-population.response';
import { CountryWithFlagResponse } from './responses/country-with-flag.response';
import { BaseResponse } from './responses/base-response';
import { FetchUtils } from '../../utils/fetch.utils';

const checkForError = (response: BaseResponse) => {
  if (response.error) throw new BadRequestException('Invalid country name');
};

@Injectable()
export class CountriesnowApi {
  private readonly apiUrl: string;
  constructor (configService: ConfigurationService) {
    this.apiUrl = configService.countriesnowUrl;
  }

  async getPopulation (country: string) {
    const response = await fetch(this.apiUrl + 'countries/population', {
      method: 'POST',
      ...FetchUtils.addBody({ country }),
    });
    return FetchUtils.toJSON<CountryWithPopulationResponse>(response, checkForError);
  }

  async getFlag (country: string) {
    const response = await fetch(this.apiUrl + 'countries/flag/images', {
      method: 'POST',
      ...FetchUtils.addBody({ country }),
    });
    return FetchUtils.toJSON<CountryWithFlagResponse>(response, checkForError);
  }
}
