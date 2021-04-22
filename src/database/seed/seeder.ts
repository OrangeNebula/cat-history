import { Connection } from 'typeorm/connection/Connection';

export interface Seeder {
  run: (connection: Connection) => Promise<any>;
}