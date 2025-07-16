import { Injectable, PipeTransform } from '@nestjs/common';
import { NaggerApi } from '../external-api/nagger/nagger-api';
import { InvalidCountryCodeException } from '../exceptions/invalid-country-code.exception';

@Injectable()
export class CountryByCodePipe implements PipeTransform {
  constructor (private readonly naggerApi: NaggerApi) {}

  async transform (code: string) {
    const countries = await this.naggerApi.getAllCountries();
    const codes = countries.map(({ countryCode }) => countryCode);

    if (!codes.includes(code)) throw new InvalidCountryCodeException();

    return code;
  }
}
