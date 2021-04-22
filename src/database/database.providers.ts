import { createConnection } from 'typeorm';
import { DatabaseConnection } from './database.constants';
import { CatSeeder } from './seed/cat.seeder';

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
      // TODO: Any other smart idea for multiple seeders?
      const catSeeder = new CatSeeder();
      await catSeeder.run(connection);
      return connection;
    },
  },
];