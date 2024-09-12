import {
  ArgumentsHost,
  HttpException,
  Catch,
  ExceptionFilter,
  Inject,
} from '@nestjs/common';
import { Response } from 'express';
import { AppService } from './app.service';

@Catch(HttpException)
export class HelloFilter implements ExceptionFilter {
  @Inject(AppService)
  private readonly appService: AppService;
  catch(exception: HttpException, host: ArgumentsHost) {
    const http = host.switchToHttp();
    const response = http.getResponse<Response>();

    const statusCode = exception.getStatus();
    const res = exception.getResponse() as { message: string[] };

    response.status(statusCode).json({
      code: statusCode,
      message: res?.message?.join ? res?.message?.join(',') : exception.message,
      error: 'Bad Request',
      data: this.appService.getHello(),
    });
  }
}
