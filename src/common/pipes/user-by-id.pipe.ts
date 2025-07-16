import { Injectable, PipeTransform } from '@nestjs/common';
import { InvalidEntityIdException } from '../exceptions/invalid-entity-id.exception';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class UserByIdPipe implements PipeTransform {
  constructor (private readonly prisma: PrismaService) {}

  async transform (id: string) {
    const user = await this.prisma.user.findUnique({ where: { id } });

    if (!user) throw new InvalidEntityIdException('User');

    return id;
  }
}
