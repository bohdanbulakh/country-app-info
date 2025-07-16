import { Injectable } from '@nestjs/common';
import { CountryShortResponse } from './responses/country-short.response';
import { ConfigurationService } from '../../../config/configuration-service';
import { CountryResponse } from './responses/country.response';
import { HolidaysResponse } from './responses/holidays.response';
import { FetchUtils } from '../../utils/fetch.utils';

const transformHolidays = (data: HolidaysResponse[]) => {
  return data.map(({ date, ...other }) => ({
    date: new Date(date),
    ...other,
  }));
};

@Injectable()
export class NaggerApi {
  private readonly apiUrl: string;
  constructor (configService: ConfigurationService) {
    this.apiUrl = configService.naggerUrl;
  }

  async getAllCountries () {
    const response = await fetch(this.apiUrl + 'AvailableCountries');
    return FetchUtils.toJSON<CountryShortResponse[]>(response);
  }

  async getCountry (countryCode: string) {
    const response = await fetch(this.apiUrl + 'CountryInfo/' + countryCode);
    return FetchUtils.toJSON<CountryResponse>(response);
  }

  async getHolidays (countryCode: string, year: number) {
    const response = await fetch(`${this.apiUrl}PublicHolidays/${year}/${countryCode}`);
    return FetchUtils.toJSON<HolidaysResponse[]>(response, transformHolidays);
  }
}
