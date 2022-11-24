import { Injectable } from '@nestjs/common';
import { DateTime } from 'luxon';

@Injectable()
export class AppService {
  calulateAgeWithBirthDate(birthDateDto: { date: string }): { data: string } {
    const birthDate = DateTime.fromISO(birthDateDto);
    const currentDate = DateTime.fromISO(Date.now());
    const age = birthDate.diff(currentDate);
    return { data: `${birthDateDto.date} age:12` };
  }
}
