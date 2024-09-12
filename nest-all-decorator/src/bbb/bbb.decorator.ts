import { SetMetadata } from '@nestjs/common';

export const Bbb = (...args: string[]) => SetMetadata('aaa', args);
