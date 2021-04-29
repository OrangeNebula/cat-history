import { HttpException, HttpStatus } from '@nestjs/common';

export class NoCatException extends HttpException {
  constructor() {
    super('Not found', HttpStatus.NOT_FOUND);
  }
}