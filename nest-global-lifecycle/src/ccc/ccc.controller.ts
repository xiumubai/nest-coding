import {
  Controller,
  OnModuleInit,
  OnApplicationBootstrap,
  OnModuleDestroy,
  BeforeApplicationShutdown,
  OnApplicationShutdown,
} from '@nestjs/common';
import { CccService } from './ccc.service';

@Controller('ccc')
export class CccController
  implements
    OnModuleInit,
    OnApplicationBootstrap,
    OnModuleDestroy,
    BeforeApplicationShutdown,
    OnApplicationShutdown
{
  constructor(private readonly cccService: CccService) {}

  onModuleInit() {
    console.log('CccController OnModuleInit');
  }

  onApplicationBootstrap() {
    console.log('CccController OnApplicationBootstrap');
  }

  onModuleDestroy() {
    console.log('CccController onModuleDestroy');
  }

  beforeApplicationShutdown() {
    console.log('CccController beforeApplicationShutdown');
  }

  onApplicationShutdown() {
    console.log('CccController onApplicationShutdown');
  }
}
