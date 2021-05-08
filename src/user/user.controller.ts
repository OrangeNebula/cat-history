import { Controller, Post } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Controller('user')
export class UserController {
  static PathCreateAccessTokenAPI = 'login';
  static PathRefreshAccessTokenAPI = 'refresh';

  constructor(
    private readonly configService: ConfigService,
  ) {
  }

  @Post(UserController.PathCreateAccessTokenAPI)
  async login(): Promise<void> {
  }

  @Post(UserController.PathRefreshAccessTokenAPI)
  async refresh(): Promise<void> {
  }

}