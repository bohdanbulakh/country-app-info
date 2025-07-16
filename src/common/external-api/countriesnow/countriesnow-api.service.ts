import { ConfigurationService } from '../../../config/configuration-service';
import { BadRequestException, Injectable } from '@nestjs/common';
import { CountryWithPopulationResponse } from './responses/country-with-population.response';
import { CountryWithFlagResponse } from './responses/country-with-flag.response';
import { BaseResponse } from './responses/base-response';

@Injectable()
export class CountriesnowApi {
  private readonly apiUrl: string;
  constructor (configService: ConfigurationService) {
    this.apiUrl = configService.countriesnowUrl;
  }

  async getPopulation (country: string) {
    const response = await fetch(this.apiUrl + 'countries/population', {
      method: 'POST',
      ...this.addBody({ country }),
    });
    return this.toJSON<CountryWithPopulationResponse>(response);
  }

  async getFlag (country: string) {
    const response = await fetch(this.apiUrl + 'countries/flag/images', {
      method: 'POST',
      ...this.addBody({ country }),
    });
    return this.toJSON<CountryWithFlagResponse>(response);
  }

  private addBody (value: object) {
    return {
      body: JSON.stringify(value),
      headers: {
        'Content-Type': 'application/json',
      },
    };
  }

  private async toJSON<T extends BaseResponse> (response: Response) {
    const parsed = (await response.json()) as T;
    this.checkForError(parsed);
    return parsed;
  }

  private checkForError (response: BaseResponse) {
    if (response.error) throw new BadRequestException('Invalid country name');
  }
}
