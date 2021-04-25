import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { catProviders } from './cat.providers';
import { CatService } from './services/cat.service';
import { CatController } from './cat.controller';
import { CatClientMapper } from './mapper/cat-client.mapper';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [DatabaseModule, MulterModule],
  providers: [
    ...catProviders,
    CatService,
    CatClientMapper,
  ],
  controllers: [CatController],
})
export class CatModule {}