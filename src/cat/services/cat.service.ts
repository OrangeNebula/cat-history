import { Inject, Injectable } from '@nestjs/common';
import { CatImageRepository, CatRepository } from '../cat.constants';
import { MoreThanOrEqual, Repository } from 'typeorm';
import { Cat } from '../domain/cat.entity';
import { CatSearchOptions } from '../domain/cat-search-options';
import { CatImage } from '../domain/cat-image.entity';

@Injectable()
export class CatService {
  static DefaultSearchTake = 10;

  constructor(
    @Inject(CatRepository)
    private catRepository: Repository<Cat>,
    @Inject(CatImageRepository)
    private catImageRepository: Repository<CatImage>,
  ) {
  }

  async create(name: string, description: string, imageFiles: Express.Multer.File[]) {
    const cat = new Cat(name, description);
    await this.catRepository.save(cat);
    const images = imageFiles.map((item) => new CatImage(
      item.originalname,
      item.path,
      item.size,
      cat,
    ));
    cat.images = images;
    await Promise.all(images.map(item => this.catImageRepository.save(item)));
    return cat;
  }

  async findAll(options: CatSearchOptions): Promise<Cat[]> {
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
    return this.catRepository.findOne({
      where: {
        id,
      },
      relations: ['images'],
    });
  }
}