import { Module } from '@nestjs/common';
import { PrismaModule } from './database/prisma.module';
import { ApiModule } from './modules/api.module';
import { ExternalApiModule } from './common/external-api/external-api.module';
import { ConfigurationModule } from './config/config.module';
import Configuration from './config/configuration.constant';

@Module({
  imports: [
    PrismaModule,
    ApiModule,
    ExternalApiModule,
    ConfigurationModule.forRoot({
      isGlobal: true,
      load: [Configuration],
    }),
  ],
})
export class AppModule {}
