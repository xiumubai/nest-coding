import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HostParam,
  Req,
  UseGuards,
} from '@nestjs/common';
import { Request } from 'express';
import { BbbService } from './bbb.service';
import { CreateBbbDto } from './dto/create-bbb.dto';
import { UpdateBbbDto } from './dto/update-bbb.dto';
import { AaaService } from 'src/aaa/aaa.service';
import { Bbb } from './bbb.decorator';
import { BbbGuard } from './bbb.guard';
import { Merge } from './merge.decorator';
@Controller({ host: ':host.0.0.1', path: 'bbb' })
export class BbbController {
  constructor(
    private readonly bbbService: BbbService,
    private readonly aaaService: AaaService,
  ) {}

  @Post()
  create(@Body() createBbbDto: CreateBbbDto) {
    return this.bbbService.create(createBbbDto);
  }

  @Get('host')
  host(@HostParam('host') host) {
    return host;
  }

  @Get('req')
  getBbbb(@Req() req: Request) {
    console.log('req', req.hostname, req.url);
  }

  @Get()
  @UseGuards(BbbGuard)
  @Bbb('admin')
  findAll() {
    return this.aaaService.findAll();
  }

  @Merge('hello2', 'admin')
  getHello3(): string {
    return 'this is merge decorator';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bbbService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBbbDto: UpdateBbbDto) {
    return this.bbbService.update(+id, updateBbbDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bbbService.remove(+id);
  }
}
