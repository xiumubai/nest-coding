import { ConsoleLogger } from '@nestjs/common';

export class MyLogger extends ConsoleLogger {
  log(message: string, context: string) {
    console.log(`---log2---[${context}]---`, message);
  }
}
