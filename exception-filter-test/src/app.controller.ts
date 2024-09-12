import {
  Controller,
  Get,
  Post,
  Body,
  BadRequestException,
  HttpException,
  HttpStatus,
  UseFilters,
  BadGatewayException,
} from '@nestjs/common';
import { AppService } from './app.service';
import { UserDto } from './user.dto';
import { UnLoginException } from './unlogin.filter';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    // throw new Error('test');
    // throw new HttpException('test', HttpStatus.BAD_REQUEST);
    // throw new BadRequestException('test');
    // throw new BadGatewayException('test');
    throw new UnLoginException('unlognin');

    return this.appService.getHello();
  }

  @Post('user')
  addUser(@Body() body: UserDto) {
    console.log(body);
    return body;
  }
}
