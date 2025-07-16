import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { CreateHolidaysDto } from './dtos/create-holidays.dto';
import { NaggerApi } from '../../common/external-api/nagger/nagger-api';
import { HolidaysResponse } from '../../common/external-api/nagger/responses/holidays.response';

@Injectable()
export class UserService {
  constructor (
    private readonly prisma: PrismaService,
    private readonly naggerApi: NaggerApi,
  ) {}

  create (data: CreateUserDto) {
    return this.prisma.user.create({ data });
  }

  async createHolidays (userId: string, data: CreateHolidaysDto) {
    const allHolidays = await this.naggerApi.getHolidays(data.countryCode, data.year);
    const filtered = this.filterHolidays(data.holidays, allHolidays);
    return this.saveHolidays(userId, filtered);
  }

  private filterHolidays (requested: string[], existing: HolidaysResponse[]) {
    return existing.filter((holiday) => requested.includes(holiday.name));
  }

  private saveHolidays (userId: string, holidays: HolidaysResponse[]) {

    return this.prisma.user.update({
      where: { id: userId },
      data: {
        holidayEvents: {
          createMany: {
            data: holidays.map(({ name, date, countryCode }) => ({
              name,
              date: new Date(date),
              countryCode,
            })),
          },
        },
      },
    });
  }
}
