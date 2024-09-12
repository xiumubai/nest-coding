import { IsNotEmpty } from 'class-validator';

export class LoginDto {
  id?: number;

  @IsNotEmpty()
  username: string;
  @IsNotEmpty()
  password: string;
}
