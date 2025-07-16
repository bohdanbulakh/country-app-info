import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ConfigurationService {
  constructor (private readonly configService: ConfigService) {}

  get naggerUrl () {
    const url = this.configService.get<string>('externalApis.nagger');
    if (!url) throw new Error('Cannot find Nagger url');
    return url;
  }

  get countriesnowUrl () {
    const url = this.configService.get<string>('externalApis.countriesnow');
    if (!url) throw new Error('Cannot find CountriesNOW URL');
    return url;
  }
}
