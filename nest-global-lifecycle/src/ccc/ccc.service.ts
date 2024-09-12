import {
  Injectable,
  OnModuleInit,
  OnApplicationBootstrap,
  OnModuleDestroy,
  BeforeApplicationShutdown,
  OnApplicationShutdown,
} from '@nestjs/common';

@Injectable()
export class CccService
  implements
    OnModuleInit,
    OnApplicationBootstrap,
    OnModuleDestroy,
    BeforeApplicationShutdown,
    OnApplicationShutdown
{
  onModuleInit() {
    console.log('CccService OnModuleInit');
  }

  onApplicationBootstrap() {
    console.log('CccService OnApplicationBootstrap');
  }

  onModuleDestroy() {
    console.log('CccService onModuleDestroy');
  }

  beforeApplicationShutdown() {
    console.log('CccService beforeApplicationShutdown');
  }

  onApplicationShutdown() {
    console.log('CccService onApplicationShutdown');
  }
}
