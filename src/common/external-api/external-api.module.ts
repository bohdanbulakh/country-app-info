import { Global, Module } from '@nestjs/common';
import { NaggerApi } from './nagger';
import { ConfigurationModule } from '../../config/config.module';

@Global()
@Module({
  imports: [ConfigurationModule],
  providers: [NaggerApi],
  exports: [NaggerApi],
})
export class ExternalApiModule {}
