import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { CreateUserDto } from './dtos/create-user.dto';

@Injectable()
export class UserService {
  constructor (private readonly prisma: PrismaService) {}

  create (data: CreateUserDto) {
    return this.prisma.user.create({ data });
  }
}
