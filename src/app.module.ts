import { Module } from '@nestjs/common';
import { PrismaModule } from './database/prisma.module';
import { ApiModule } from './modules/api.module';

@Module({
  imports: [PrismaModule, ApiModule],
})
export class AppModule {}
