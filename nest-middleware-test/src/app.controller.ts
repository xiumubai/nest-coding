import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    console.log('getHello');

    return 'hello';
  }

  @Get('hello')
  getHello2(): string {
    return 'hello2';
  }

  @Get('world')
  getWorld(): string {
    return 'world';
  }

  @Get('world2')
  getWorld2(): string {
    return 'world2';
  }
}
