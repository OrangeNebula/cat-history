import { Inject, Injectable } from '@nestjs/common';
import { CatRepository } from './cat.constants';
import { Repository } from 'typeorm';
import { Cat } from './cat.entity';

@Injectable()
export class CatService {
  constructor(
    @Inject(CatRepository)
    private catRepository: Repository<Cat>,
  ) {
  }

  async findAll(): Promise<Cat[]> {
    return this.catRepository.find();
  }
}