import { Module } from '@nestjs/common';
import { PrismaModule } from './database/prisma.module';
import { ApiModule } from './modules/api.module';
import { ExternalApiModule } from './common/external-api/external-api.module';

@Module({
  imports: [PrismaModule, ApiModule, ExternalApiModule],
})
export class AppModule {}
