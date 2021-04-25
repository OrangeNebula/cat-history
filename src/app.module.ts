import { Global, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import database from './config/database.config';
import { CatModule } from './cat/cat.module';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env.${process.env.NODE_ENV || 'local'}`,
      load: [database]
    }),
    MulterModule.register({
      storage: diskStorage({
        destination: (req, file, cb) => {
          cb(null, './upload')
        },
        filename: (req, file, cb) => {
          const suffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
          cb(null, `${suffix}-${file.originalname}`);
        }
      })
    }),
    CatModule,
  ],
  controllers: [AppController],
  providers: [AppService],
  exports: [MulterModule],
})
export class AppModule {}
