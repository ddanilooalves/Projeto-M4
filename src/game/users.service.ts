import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma/prisma.service';
import { CreateUsersDto } from './dto/create-users.dto';
import { Users } from './entities/users.entity';

@Injectable()
export class UsersService {
  tables: Users[] = [];

  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.table.findMany();
  }

  create(createUsersDto: CreateUsersDto) {
    const table: Users = {
      ...createUsersDto,
      number: 0
    };

    this.tables.push(table);

    return table;
  }
}