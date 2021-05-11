import { Connection } from 'typeorm';
import { RefreshToken } from './domain/refresh-token.entity';
import { DatabaseConnection } from '../database/database.constants';
import { RefreshTokenRepository } from './authentication.constants';

export const authenticationProviders = [
  {
    provide: RefreshTokenRepository,
    useFactory: (connection: Connection) => connection.getRepository(RefreshToken),
    inject: [DatabaseConnection],
  }
]