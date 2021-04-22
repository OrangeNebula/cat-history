import { Seeder } from './seeder';
import { Connection } from 'typeorm';
import { Cat } from '../../cat/cat.entity';

export class CatSeeder implements Seeder {
  async run(connection: Connection): Promise<any> {
    const repository = connection.getRepository(Cat);
    await Promise.all([
      repository.save(new Cat('젖소냥', '새로 만난 젖소냥이!')),
      repository.save(new Cat('염소냥', '새로 만난 염소냥이!')),
      repository.save(new Cat('바둑냥', '새로 만난 바둑냥이!')),
    ]);
  }
}