import { Injectable } from '@nestjs/common';
import { CountryShortResponse } from './responses/country-short.response';
import { ConfigurationService } from '../../../config/configuration-service';
import { CountryResponse } from './responses/country.response';

@Injectable()
export class NaggerApi {
  private readonly apiUrl: string;
  constructor (configService: ConfigurationService) {
    this.apiUrl = configService.naggerUrl;
  }

  async getAllCountries () {
    const response = await fetch(this.apiUrl + 'AvailableCountries');
    return (await response.json()) as unknown as Promise<CountryShortResponse[]>;
  }

  async getCountry (countryCode) {
    const response = await fetch(this.apiUrl + 'CountryInfo/' + countryCode);
    return (await response.json()) as unknown as Promise<CountryResponse>;
  }
}
