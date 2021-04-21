import { CatDto } from './cat.dto';

export class ResponseSearchCatDto {
  cats: CatDto[];
  next: string;
}