import { Module } from '@nestjs/common';
import { MyLogger } from './MyLogger';

@Module({
  providers: [MyLogger],
  exports: [MyLogger],
})
export class LoggerModule {}
