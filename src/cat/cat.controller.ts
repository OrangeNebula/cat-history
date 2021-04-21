import { Body, Controller, Get, HttpException, HttpStatus, Param, Post, Query } from '@nestjs/common';
import { RequestCreateCatDto } from './dto/request-create-cat.dto';
import { CatService } from './cat.service';
import { CatDto } from './dto/cat.dto';
import { CatClientMapper } from './mapper/cat-client.mapper';
import { ResponseSearchCatDto } from './dto/response-search-cat.dto';
import { CatSearchOptions } from './domain/cat-search-options';

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

  @Get('search')
  async search(@Query('cursor') cursor?: string): Promise<ResponseSearchCatDto> {
    const cats = await this.catService.findAll(
      // TODO: Use type cast pipeline?
      new CatSearchOptions(cursor ? parseInt(cursor) : null),
    );
    return {
      cats,
      next: '<url>',
    }
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