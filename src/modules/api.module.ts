import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { CountryModule } from './country/country.module';

@Module({
  imports: [UserModule, CountryModule],
})
export class ApiModule {}
