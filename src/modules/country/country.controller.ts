import { Controller, Get, Param } from '@nestjs/common';
import { CountryService } from './country.service';

@Controller('countries')
export class CountryController {
  constructor (private readonly  countryService: CountryService) {}

  @Get()
  getAll () {
    return this.countryService.getAll();
  }

  @Get(':code')
  get (
    @Param('code') countryCode: string,
  ) {
    return this.countryService.get(countryCode);
  }
}
