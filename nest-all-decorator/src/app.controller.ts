import { Controller, Get, Inject, Optional } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Optional()
  @Inject('xiumubai')
  private readonly xiumubai: Record<string, any>;

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
