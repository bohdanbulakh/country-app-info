import { Body, Controller, Param, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor (private readonly userService: UserService) {}

  @Post(':userId/calendar/holidays')
  createUserHolidays (
    @Param('userId') userId: string,
  ) {}

  @Post()
  create (
    @Body() body: CreateUserDto,
  ) {
    return this.userService.create(body);
  }
}
