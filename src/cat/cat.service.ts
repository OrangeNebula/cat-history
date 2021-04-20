import { Inject, Injectable } from '@nestjs/common';
import { CatRepository } from './cat.constants';
import { Repository } from 'typeorm';
import { Cat } from './cat.entity';
import { RequestCreateCatDto } from './dto/request-create-cat.dto';

@Injectable()
export class CatService {
  constructor(
    @Inject(CatRepository)
    private catRepository: Repository<Cat>,
  ) {
  }

  async create(dto: RequestCreateCatDto) {
    const cat = new Cat(dto.name, dto.description);
    return this.catRepository.save(cat);
  }

  async findAll(): Promise<Cat[]> {
    return this.catRepository.find();
  }

  async find(id: number): Promise<Cat> {
    return this.catRepository.findOne(id);
  }
}