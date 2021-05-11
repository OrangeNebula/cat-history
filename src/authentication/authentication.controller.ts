import { Controller, Post } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Controller('authentication')
export class AuthenticationController {

  static PathCreateAccessTokenAPI = 'login';

  static PathRefreshAccessTokenAPI = 'refresh';

  constructor(
    private readonly configService: ConfigService,
  ) {
  }

  @Post(AuthenticationController.PathCreateAccessTokenAPI)
  async login(): Promise<void> {
  }

  @Post(AuthenticationController.PathRefreshAccessTokenAPI)
  async refresh(): Promise<void> {
  }

}