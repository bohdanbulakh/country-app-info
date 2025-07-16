import { Injectable } from '@nestjs/common';
import { CountryResponse } from './responses/country.response';
import { ConfigurationService } from '../../config/configuration-service';

@Injectable()
export class NaggerApi {
  private readonly apiUrl: string;
  constructor (configService: ConfigurationService) {
    this.apiUrl = configService.naggerUrl;
  }

  async getAllCountries () {
    const result = await fetch(this.apiUrl + 'AvailableCountries');
    return (await result.json()) as unknown as Promise<CountryResponse[]>;
  }
}
