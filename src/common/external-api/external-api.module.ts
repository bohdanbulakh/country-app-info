import { Global, Module } from '@nestjs/common';
import { NaggerApi } from './nagger';

@Global()
@Module({
  providers: [NaggerApi],
  exports: [NaggerApi],
})
export class ExternalApiModule {}
