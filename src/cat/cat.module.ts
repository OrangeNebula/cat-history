import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { catProviders } from './cat.providers';
import { CatService } from './cat.service';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...catProviders,
    CatService,
  ],
})
export class CatModule {}