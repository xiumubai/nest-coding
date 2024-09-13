import { Module, DynamicModule } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';

@Module({})
export class UserModule {
  static register(options: Record<string, any>): DynamicModule {
    return {
      module: UserModule,
      providers: [
        {
          provide: 'OPTIONS',
          useValue: options,
        },
        UserService,
      ],
      controllers: [UserController],
      exports: [],
    };
  }
}
