import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule.register({ name: '张三' })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
