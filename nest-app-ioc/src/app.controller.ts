import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { PersonService } from './person/person.service';
@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly personService: PersonService,
  ) {}

  @Get()
  getHello(): string {
    console.log(this.personService.findAll());
    return this.appService.getHello();
  }
}
