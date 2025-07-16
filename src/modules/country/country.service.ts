import { Injectable } from '@nestjs/common';
import { NaggerApi } from '../../common/external-api/nagger/nagger-api';
import { CountriesnowApi } from '../../common/external-api/countriesnow/countriesnow-api.service';

@Injectable()
export class CountryService {
  constructor (
    private readonly naggerApi: NaggerApi,
    private readonly countriesnowApi: CountriesnowApi,
  ) {}

  async getAll () {
    return this.naggerApi.getAllCountries();
  }

  async get (code: string) {
    const { commonName, borders: countryBorders } = await this.naggerApi.getCountry(code);
    const borders = countryBorders?.map(({ countryCode, commonName }) => ({
      code: countryCode,
      name: commonName,
    })) ?? [];

    const { data: { populationCounts: population } } = await this.countriesnowApi.getPopulation(commonName);
    const { data: { flag } } = await this.countriesnowApi.getFlag(commonName);

    return {
      borders,
      population,
      flag,
    };
  }
}
