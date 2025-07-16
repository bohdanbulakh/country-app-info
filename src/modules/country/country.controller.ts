import { Controller, Get, Param } from '@nestjs/common';
import { CountryService } from './country.service';
import { CountryByCodePipe } from '../../common/pipes/country-by-code.pipe';

@Controller('countries')
export class CountryController {
  constructor (private readonly  countryService: CountryService) {}

  @Get()
  getAll () {
    return this.countryService.getAll();
  }

  @Get(':code')
  get (
    @Param('code', CountryByCodePipe) countryCode: string,
  ) {
    return this.countryService.get(countryCode);
  }
}
