import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Query,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { RequestCreateCatDto } from './dto/request-create-cat.dto';
import { CatService } from './services/cat.service';
import { CatDto } from './dto/cat.dto';
import { CatClientMapper } from './mapper/cat-client.mapper';
import { ResponseSearchCatDto } from './dto/response-search-cat.dto';
import { CatSearchOptions } from './domain/cat-search-options';
import { FilesInterceptor } from '@nestjs/platform-express';

@Controller('cat')
export class CatController {
  constructor(
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

  @Get('search')
  async search(@Query('cursor') cursor?: string): Promise<ResponseSearchCatDto> {
    const cats = await this.catService.findAll(
      // TODO: Use type cast pipeline?
      new CatSearchOptions(cursor ? parseInt(cursor) : null),
    );
    return {
      cats: cats.map(cat => this.catClientMapper.toClient(cat)),
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