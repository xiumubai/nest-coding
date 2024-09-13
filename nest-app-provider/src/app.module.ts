import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    {
      provide: AppService,
      useClass: AppService,
    },
    {
      // 注入一个值
      provide: 'APP_USER',
      useValue: {
        name: '张三',
        age: 18,
      },
    },
  ],
})
export class AppModule {}
