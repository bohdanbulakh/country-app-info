import { Injectable } from '@nestjs/common';
import { NaggerApi } from '../../common/external-api/nagger';

@Injectable()
export class CountryService {
  constructor (private readonly naggerApi: NaggerApi) {}

  async getAll () {
    return this.naggerApi.getAllCountries();
  }
}
