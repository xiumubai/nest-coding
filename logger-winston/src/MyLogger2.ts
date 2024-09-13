import { ConsoleLogger, Inject, Injectable } from '@nestjs/common';
import { AppService } from './app.service';

@Injectable()
export class MyLogger extends ConsoleLogger {
  @Inject(AppService) private appService: AppService;

  log(message: string, context: string) {
    console.log(this.appService.getHello());
    console.log(`---log2---[${context}]---`, message);
  }
}
