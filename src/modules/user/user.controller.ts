import { Body, Controller, Param, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UserService } from './user.service';
import { UserByIdPipe } from '../../common/pipes/user-by-id.pipe';
import { CreateHolidaysDto } from './dtos/create-holidays.dto';

@Controller('users')
export class UserController {
  constructor (private readonly userService: UserService) {}

  @Post(':userId/calendar/holidays')
  createUserHolidays (
    @Param('userId', UserByIdPipe) userId: string,
    @Body() body: CreateHolidaysDto,
  ) {
    return this.userService.createHolidays(userId, body);
  }

  @Post()
  create (
    @Body() body: CreateUserDto,
  ) {
    return this.userService.create(body);
  }
}
