import { Logger, Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  private logger = new Logger();
  @Get()
  getHello(): string {
    this.logger.debug('aaa', AppController.name);
    this.logger.error('aaa', AppController.name);
    this.logger.log('aaa', AppController.name);
    this.logger.verbose('aaa', AppController.name);
    this.logger.warn('aaa', AppController.name);
    return this.appService.getHello();
  }
}
