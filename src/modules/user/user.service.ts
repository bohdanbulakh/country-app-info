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
    const filtered = await this.filterHolidays(userId, data.holidays, allHolidays);
    await this.saveHolidays(userId, filtered);
    return this.prisma.holidayEvent.findMany({
      where: {
        name: {
          in: filtered.map((x) => x.name),
        },
        countryCode: data.countryCode,
        userId,
      },
    });
  }

  private async filterHolidays (userId: string, requested: string[], existing: HolidaysResponse[]) {
    const toSave = existing.filter((holiday) => requested.includes(holiday.name));
    const result: HolidaysResponse[] = [];

    for (const holiday of toSave) {
      const saved = await this.prisma.holidayEvent.findFirst({
        where: {
          userId,
          name: holiday.name,
          countryCode: holiday.countryCode,
        },
      });

      if (!saved) {
        result.push(holiday);
      }
    }

    return result;
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
