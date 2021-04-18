import { Connection } from 'typeorm';
import { Cat } from './cat.entity';
import { CatRepository } from './cat.constants';
import { DatabaseConnection } from '../database/database.constants';

export const catProviders = [
  {
    provide: CatRepository,
    useFactory: (connection: Connection) => connection.getRepository(Cat),
    inject: [DatabaseConnection],
  }
]