import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  // constructor(private readonly appService: AppService) {}
  @Inject(AppService)
  private readonly appService: AppService;

  @Inject('APP_USER')
  private readonly user: { name: string; age: number }; // 注入一个常量

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('user')
  getUser(): string {
    return this.user.name + this.user.age;
  }
}
