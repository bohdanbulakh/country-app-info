import { Injectable } from '@nestjs/common';
import { CountryResponse } from './responses/country.response';

@Injectable()
export class NaggerApi {
  private readonly apiUrl: string;
  constructor () {
    const api_url = process.env.NAGGER_API_URL;
    if (!api_url)  throw new Error('Cannot find Nagger API url');
    this.apiUrl = api_url + '/api/v3/';
  }

  async getAllCountries () {
    const result = await fetch(this.apiUrl + 'AvailableCountries');
    return (await result.json()) as unknown as Promise<CountryResponse[]>;
  }
}
