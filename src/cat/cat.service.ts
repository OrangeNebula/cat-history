import { Inject, Injectable, Logger } from '@nestjs/common';
import { CatRepository } from './cat.constants';
import { MoreThanOrEqual, Repository } from 'typeorm';
import { Cat } from './cat.entity';
import { RequestCreateCatDto } from './dto/request-create-cat.dto';
import { RequestSearchCatDto } from './dto/request-search-cat.dto';
import { CatSearchOptions } from './domain/cat-search-options';

@Injectable()
export class CatService {
  static DefaultSearchTake = 10;

  constructor(
    @Inject(CatRepository)
    private catRepository: Repository<Cat>,
  ) {
  }

  async create(dto: RequestCreateCatDto) {
    const cat = new Cat(dto.name, dto.description);
    return this.catRepository.save(cat);
  }

  async findAll(options: CatSearchOptions): Promise<Cat[]> {
    console.log(options);
    return this.catRepository.find({
      where: {
        id: MoreThanOrEqual(options.cursor),
      },
      take: CatService.DefaultSearchTake,
      order: {
        id: 'DESC',
      },
    });
  }

  async find(id: number): Promise<Cat> {
    return this.catRepository.findOne(id);
  }
}