import { ExceptionFilter, Catch, ArgumentsHost, HttpException, Logger } from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    const requestPayload = {
      path: request.url,
      query: request.query,
      params: request.params,
      body: request.body,
    }

    const responsePayload = {
      statusCode: exception.getStatus(),
      error: exception.message,
    };

    Logger.log(requestPayload);
    Logger.log(responsePayload);

    response
      .status(exception.getStatus())
      .json(responsePayload);
  }
}