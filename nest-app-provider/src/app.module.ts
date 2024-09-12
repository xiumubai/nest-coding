import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    {
      provide: 'app_service',
      useClass: AppService,
    },
    {
      provide: 'person',
      useValue: {
        name: 'xiumubai',
        age: 18,
      },
    },
    {
      provide: 'person2',
      useFactory() {
        return {
          name: '朽木白',
          age: 40,
        };
      },
    },
    {
      provide: 'person3',
      async useFactory(person: { name: string }, appService: AppService) {
        await new Promise((resolve) => {
          setTimeout(resolve, 3000);
        });
        return {
          name: person.name,
          desc: appService.getHello(),
        };
      },
      inject: ['person', 'app_service'],
    },
    {
      provide: 'pserson4',
      useExisting: 'person2',
    },
  ],
})
export class AppModule {}
