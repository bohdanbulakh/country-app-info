import { HttpException, HttpStatus } from '@nestjs/common';

export class InvalidCountryCodeException extends HttpException {
  constructor () {
    super('Country with such code is not found', HttpStatus.NOT_FOUND);
  }
}
