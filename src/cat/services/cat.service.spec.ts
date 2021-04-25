import { CatService } from './cat.service';
import { Test } from '@nestjs/testing';
import { catProviders } from '../cat.providers';
import { CatClientMapper } from '../mapper/cat-client.mapper';
import { DatabaseModule } from '../../database/database.module';
import { Cat } from '../domain/cat.entity';

describe('Cat service test', () => {
  let catService: CatService;

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      imports: [DatabaseModule],
      providers: [
        ...catProviders,
        CatService,
        CatClientMapper,
      ]
    }).compile();

    catService = module.get<CatService>(CatService);
  })

  describe('create', () => {
    let cat: Cat;
    it('should create new cat item', async () => {
      cat = await catService.create('테스트 냥', '난 테스트 냥', []);
      expect(cat.name).toBe('테스트 냥');
    });

    it('should return created cat item', async () => {
      const result = await catService.find(cat.id);
      expect(result.name).toBe('테스트 냥');
    });
  });
});