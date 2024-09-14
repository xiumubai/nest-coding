import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(function (req, res, next) {
    console.log('brefore');
    next();
    console.log('after');
  });
  await app.listen(3000);
}
bootstrap();
