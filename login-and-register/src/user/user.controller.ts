import {
  Body,
  Controller,
  Post,
  Inject,
  Res,
  Get,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { Response } from 'express';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { UserInfoDto } from './dto/userinfo.dto';
import { JwtService } from '@nestjs/jwt';
import { LoginGuard } from './login.guard';
import { ValidationPipe } from '@nestjs/common/pipes';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Inject(JwtService)
  private jwtService: JwtService;

  @Post('register')
  register(@Body(ValidationPipe) user: RegisterDto) {
    return this.userService.register(user);
  }

  @Post('login')
  async login(
    @Body(ValidationPipe) user: LoginDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const foundUser: UserInfoDto = await this.userService.login(user);

    if (foundUser) {
      const token = await this.jwtService.signAsync({
        user: {
          id: foundUser.id,
          username: foundUser.username,
        },
      });
      res.setHeader('authorization', 'bearer ' + token);

      return 'login success';
    } else {
      return 'login fail';
    }
  }

  @Get('getUserInfo')
  @UseGuards(LoginGuard)
  getUserInfo() {
    return 'userinfo';
  }
}
