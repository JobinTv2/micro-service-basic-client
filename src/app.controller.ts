import { Body, Controller, Post, forwardRef, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(
    @Inject(forwardRef(() => AppService))
    private readonly appService: AppService,
  ) {}

  @MessagePattern('age')
  age(birthDateDto: { date: string }): { data: string } {
    return this.appService.calulateAgeWithBirthDate(birthDateDto);
  }
}
