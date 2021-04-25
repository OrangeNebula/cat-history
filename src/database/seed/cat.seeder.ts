import { Seeder } from './seeder';
import { Connection } from 'typeorm';
import { Cat } from '../../cat/domain/cat.entity';

export const catSeedData = [
  new Cat('젖소냥', '새로 만난 젖소냥이!', []),
  new Cat('염소냥', '새로 만난 염소냥이!', []),
  new Cat('바둑냥', '새로 만난 바둑냥이!', []),
]

export class CatSeeder implements Seeder {
  async run(connection: Connection): Promise<any> {
    const repository = connection.getRepository(Cat);
    await Promise.all(catSeedData.map(item => repository.save(item)))
  }
}