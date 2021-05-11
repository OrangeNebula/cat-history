import { Controller, Post } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Controller('user')
export class UserController {
  constructor(
    private readonly configService: ConfigService,
  ) {
  }
}