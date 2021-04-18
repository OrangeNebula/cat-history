import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(
    private configService: ConfigService,
  ) {
  }
  getHello(): string {
    return `Hello World! Database host is ${this.configService.get('database.host')}`;
  }
}
