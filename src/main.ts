import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  Logger.log(`Start bootstrap, ${configService.get('app.host')}:${configService.get('app.port')}`);
  await app.listen(configService.get('app.port'));
}
bootstrap();
