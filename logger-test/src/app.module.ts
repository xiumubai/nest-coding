import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { MyLogger } from './MyLogger2';
import { MyLogger } from './logger/MyLogger';
import { LoggerModule } from './logger/logger.module';

@Module({
  imports: [LoggerModule],
  controllers: [AppController],
  providers: [AppService, MyLogger],
})
export class AppModule {}
