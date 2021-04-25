import { Connection } from 'typeorm';
import { Cat } from './domain/cat.entity';
import { CatImageRepository, CatRepository } from './cat.constants';
import { DatabaseConnection } from '../database/database.constants';
import { CatImage } from './domain/cat-image.entity';

export const catProviders = [
  {
    provide: CatRepository,
    useFactory: (connection: Connection) => connection.getRepository(Cat),
    inject: [DatabaseConnection],
  },
  {
    provide: CatImageRepository,
    useFactory: (connection: Connection) => connection.getRepository(CatImage),
    inject: [DatabaseConnection],
  }
]