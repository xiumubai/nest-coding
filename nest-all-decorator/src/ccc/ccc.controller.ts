import { Controller, Get, Headers, Query } from '@nestjs/common';
import { CccService } from './ccc.service';
import { Ccc } from './ccc.decorator';
import { MyHeaders, MyQuery, MyClass } from './myHeaders.decorator';
// @Controller('ccc')
@MyClass()
export class CccController {
  constructor(private readonly cccService: CccService) {}

  @Get('arg')
  getArg(@Ccc() c) {
    return c;
  }

  @Get('my')
  getHeader(@Headers('Accept') headers1, @MyHeaders('accept') headers2) {
    console.log('headers1', headers1);
    console.log('headers2', headers2);
  }

  @Get('query')
  getHello6(@Query('aaa') aaa, @MyQuery('bbb') bbb) {
    console.log('aaa', aaa);
    console.log('bbb', bbb);
  }
}
