import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { catProviders } from './cat.providers';
import { CatService } from './cat.service';
import { CatController } from './cat.controller';
import { CatClientMapper } from './mapper/cat-client.mapper';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...catProviders,
    CatService,
    CatClientMapper,
  ],
  controllers: [CatController],
})
export class CatModule {}