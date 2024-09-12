import { applyDecorators, Get, UseGuards } from '@nestjs/common';
import { Bbb } from './bbb.decorator';
import { BbbGuard } from './bbb.guard';

export function Merge(path, role) {
  return applyDecorators(Get(path), Bbb(role), UseGuards(BbbGuard));
}
