import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { catProviders } from './cat.providers';
import { CatService } from './cat.service';
import { CatController } from './cat.controller';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...catProviders,
    CatService,
  ],
  controllers: [CatController],
})
export class CatModule {}