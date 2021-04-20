import { Body, Controller, Get, HttpException, HttpStatus, Param, Post } from '@nestjs/common';
import { RequestCreateCatDto } from './dto/request-create-cat.dto';
import { CatService } from './cat.service';
import { CatDto } from './dto/cat.dto';
import { CatClientMapper } from './mapper/cat-client.mapper';

@Controller('cat')
export class CatController {
  constructor(
    private readonly catService: CatService,
    private readonly catClientMapper: CatClientMapper,
  ) {
  }

  @Post()
  async create(@Body() createCatDto: RequestCreateCatDto) {
    const cat = await this.catService.create(createCatDto);
    return this.catClientMapper.toClient(cat);
  }

  @Get(':id')
  async get(@Param('id') id: number): Promise<CatDto | null> {
    const cat = await this.catService.find(id);
    if (!cat) {
      throw new HttpException('Not found.', HttpStatus.NOT_FOUND);
    }
    return this.catClientMapper.toClient(cat);
  }
}