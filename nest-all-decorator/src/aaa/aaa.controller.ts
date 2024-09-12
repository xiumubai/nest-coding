import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseFilters,
  HttpStatus,
  HttpException,
  SetMetadata,
  UseGuards,
  Headers,
  Ip,
  Session,
} from '@nestjs/common';
import { AaaService } from './aaa.service';
import { CreateAaaDto } from './dto/create-aaa.dto';
import { UpdateAaaDto } from './dto/update-aaa.dto';
import { AaaFilter } from './aaa.filter';
import { AaaGuard } from './aaa.guard';

@Controller('aaa')
@SetMetadata('roles', ['user'])
export class AaaController {
  constructor(private readonly aaaService: AaaService) {}

  @Post()
  create(@Body() createAaaDto: CreateAaaDto) {
    console.log(createAaaDto);
    return this.aaaService.create(createAaaDto);
  }

  @Get()
  @UseFilters(AaaFilter)
  @SetMetadata('roles', ['admin'])
  @UseGuards(AaaGuard)
  findAll() {
    throw new HttpException('xxx', HttpStatus.BAD_REQUEST);
    return this.aaaService.findAll();
  }

  @Get('/header')
  header(
    @Headers('Accept') accept: string,
    @Headers() headers: Record<string, any>,
  ) {
    console.log('accept', accept);
    console.log('headers', headers);
  }

  @Get('/ip')
  ip(@Ip() ip: string) {
    console.log(ip);
  }

  @Get('/session')
  session(@Session() session: string) {
    console.log(session);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.aaaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAaaDto: UpdateAaaDto) {
    return this.aaaService.update(+id, updateAaaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.aaaService.remove(+id);
  }
}
