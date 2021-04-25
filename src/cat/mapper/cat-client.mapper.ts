import { Cat } from '../domain/cat.entity';
import { CatDto } from '../dto/cat.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CatClientMapper {
  public toClient(cat: Cat): CatDto {
    return new CatDto(
      cat.id,
      cat.name,
      cat.description,
      cat.images ? cat.images.map((item) => item.path) : [],
    );
  }
}