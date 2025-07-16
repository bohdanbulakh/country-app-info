import { Global, Module } from '@nestjs/common';
import { NaggerApi } from './nagger/nagger-api';
import { ConfigurationModule } from '../../config/config.module';
import { CountriesnowApi } from './countriesnow/countriesnow-api.service';

@Global()
@Module({
  imports: [ConfigurationModule],
  providers: [NaggerApi, CountriesnowApi],
  exports: [NaggerApi, CountriesnowApi],
})
export class ExternalApiModule {}
