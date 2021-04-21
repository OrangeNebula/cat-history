import { createConnection } from 'typeorm';
import { DatabaseConnection } from './database.constants';

export const databaseProviders = [
  {
    provide: DatabaseConnection,
    useFactory: async () => {
      const connection = await createConnection({
        type: 'sqlite',
        database: ':memory:',
        entities: [
          __dirname + '/../**/*.entity{.ts,.js}',
        ],
        migrations: ['./migration/*.ts'],
        synchronize: true,
        logging: 'all',
      });
      // await connection.runMigrations();
      return connection;
    },
  },
];