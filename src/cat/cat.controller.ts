import { Body, Controller, Post } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatService } from './cat.service';

@Controller('cat')
export class CatController {
  constructor(
    private readonly catService: CatService,
  ) {
  }

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    return this.catService.create(createCatDto);
  }
}