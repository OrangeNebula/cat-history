import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  UploadedFiles, UseFilters,
  UseInterceptors,
} from '@nestjs/common';
import { RequestCreateCatDto } from './dto/request-create-cat.dto';
import { CatService } from './services/cat.service';
import { CatDto } from './dto/cat.dto';
import { CatClientMapper } from './mapper/cat-client.mapper';
import { ResponseSearchCatDto } from './dto/response-search-cat.dto';
import { CatSearchOptions } from './domain/cat-search-options';
import { FilesInterceptor } from '@nestjs/platform-express';
import { ConfigService } from '@nestjs/config';
import { NoCatException } from './exceptions/no-cat.exception';
import { HttpExceptionFilter } from '../core/filter/http-exception.filter';

@UseFilters(new HttpExceptionFilter())
@Controller('cat')
export class CatController {
  static PathSearchAPI = 'search';

  constructor(
    private readonly configService: ConfigService,
    private readonly catService: CatService,
    private readonly catClientMapper: CatClientMapper,
  ) {
  }

  @Post()
  @UseInterceptors(FilesInterceptor('images'))
  async create(
    @Body() dto: RequestCreateCatDto,
    @UploadedFiles() images: Express.Multer.File[],
  ) {
    const cat = await this.catService.create(
      dto.name,
      dto.description,
      images,
    );
    return this.catClientMapper.toClient(cat);
  }

  @Get(CatController.PathSearchAPI)
  async search(@Query('cursor') cursor?: string): Promise<ResponseSearchCatDto> {
    const cats = await this.catService.findAll(
      // TODO: Use type cast pipeline?
      new CatSearchOptions(cursor ? parseInt(cursor) : null),
    );
    return {
      cats: cats.map(cat => this.catClientMapper.toClient(cat)),
      // TODO: Use builder pattern, Use filter option domain entity
      next: `${this.configService.get('app.host')}:${this.configService.get('app.port')}/cat/${CatController.PathSearchAPI}?cursor=${cats[0].id}`,
    }
  }

  @Get(':id')
  async get(@Param('id') id: number): Promise<CatDto | null> {
    const cat = await this.catService.find(id);
    if (!cat) {
      throw new NoCatException();
    }
    return this.catClientMapper.toClient(cat);
  }
}