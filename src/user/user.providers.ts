import { RefreshTokenRepository } from './user.constants';
import { Connection } from 'typeorm';
import { RefreshToken } from './domain/refresh-token.entity';
import { DatabaseConnection } from '../database/database.constants';

export const userProviders = [
  {
    provide: RefreshTokenRepository,
    useFactory: (connection: Connection) => connection.getRepository(RefreshToken),
    inject: [DatabaseConnection],
  }
]