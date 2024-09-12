import {
  Controller,
  DefaultValuePipe,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseArrayPipe,
  ParseBoolPipe,
  ParseEnumPipe,
  ParseFloatPipe,
  ParseIntPipe,
  ParseUUIDPipe,
  Query,
} from '@nestjs/common';
import { AppService } from './app.service';

enum PATHENUM {
  AAA = '111',
  BBB = '222',
  CCC = '333',
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getA(
    @Query(
      'a',
      new ParseIntPipe({
        exceptionFactory: (msg) => {
          console.log(msg);
          throw new HttpException('xxx' + msg, HttpStatus.NOT_FOUND);
        },
      }),
    )
    a,
  ): string {
    return a + 1;
  }

  @Get('b')
  getB(
    @Query('b', new ParseFloatPipe())
    a,
  ): string {
    return a + 1;
  }

  @Get('c')
  getC(
    @Query('a', new ParseBoolPipe())
    a,
  ): string {
    return typeof a;
  }

  @Get('d')
  getD(
    @Query(
      'a',
      new ParseArrayPipe({
        items: Number,
      }),
    )
    a: Array<number>,
  ) {
    return a.reduce((total, item) => total + item, 0);
  }

  @Get('f')
  getF(
    @Query(
      'a',
      new ParseArrayPipe({
        separator: '..',
        optional: true,
      }),
    )
    a: Array<string>,
  ) {
    return a;
  }

  @Get('g/:enum')
  getG(
    @Param('enum', new ParseEnumPipe(PATHENUM))
    e: PATHENUM,
  ) {
    return e;
  }

  @Get('h/:uuid')
  getH(
    @Param('uuid', new ParseUUIDPipe())
    uuid: string,
  ) {
    return uuid;
  }

  @Get('i')
  getI(
    @Query('iii', new DefaultValuePipe('123'))
    iii: string,
  ) {
    return iii;
  }
}
