import { IsInt } from 'class-validator';
export class CreateAaaDto {
  name: string;
  @IsInt()
  age: number;
}
