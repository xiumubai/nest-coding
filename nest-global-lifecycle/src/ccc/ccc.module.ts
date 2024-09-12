import {
  Module,
  OnModuleInit,
  OnApplicationBootstrap,
  OnModuleDestroy,
  BeforeApplicationShutdown,
  OnApplicationShutdown,
} from '@nestjs/common';
import { CccService } from './ccc.service';
import { CccController } from './ccc.controller';

@Module({
  controllers: [CccController],
  providers: [CccService],
})
export class CccModule
  implements
    OnModuleInit,
    OnApplicationBootstrap,
    OnModuleDestroy,
    BeforeApplicationShutdown,
    OnApplicationShutdown
{
  onModuleInit() {
    console.log('CccModule OnModuleInit');
  }

  onApplicationBootstrap() {
    console.log('CccModule OnApplicationBootstrap');
  }

  onModuleDestroy() {
    console.log('CccModule onModuleDestroy');
  }

  beforeApplicationShutdown() {
    console.log('CccModule beforeApplicationShutdown');
  }

  onApplicationShutdown() {
    console.log('CccModule onApplicationShutdown');
  }
}
