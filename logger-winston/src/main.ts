import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MyLogger } from './MyLogger3';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    // logger: new MyLogger(),
    // bufferLogs: true,
  });
  // app.useLogger(app.get(MyLogger));
  app.useLogger(new MyLogger());
  await app.listen(3000);
}
bootstrap();
