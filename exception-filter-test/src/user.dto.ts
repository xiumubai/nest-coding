import { IsNotEmpty, IsNumber } from 'class-validator';

export class UserDto {
  @IsNotEmpty({ message: 'name is required' })
  name: string;

  @IsNotEmpty({ message: 'age is required' })
  @IsNumber({}, { message: 'age must be a number' })
  age: number;
}
