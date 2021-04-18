import { createConnection } from 'typeorm';
import { DatabaseConnection } from './database.constants';

export const databaseProviders = [
  {
    provide: DatabaseConnection,
    useFactory: async () => await createConnection({
      type: 'sqlite',
      database: ':memory:',
      entities: [
        __dirname + '/../**/*.entity{.ts,.js}',
      ]
    }),
  },
];