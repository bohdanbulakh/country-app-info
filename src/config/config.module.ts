import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { ConfigurationService } from './configuration-service';

@Module({
  providers: [ConfigurationService],
  exports: [ConfigurationService],
})
export class ConfigurationModule extends ConfigModule {}
