import { Injectable } from '@nestjs/common';
import { DateTime } from 'luxon';

@Injectable()
export class AppService {
  calulateAgeWithBirthDate(birthDateDto: { date: string }): { data: string } {
    return {
      data: `Your age is ${Math.abs(
        Math.ceil(
          DateTime.fromFormat(birthDateDto.date, 'dd/MM/yyyy').diffNow('years')
            .years,
        ),
      )}`,
    };
  }
}
