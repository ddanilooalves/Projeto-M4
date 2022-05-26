import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-users.dto';
import { Users } from './entities/users.entity';

@Injectable()
export class UsersService {
  tables: Users[] = [];

  findAll() {
    return this.tables;
  }

  create(createTableDto: CreateUserDto) {
    const table: Users = {
      ...createTableDto,
      number: 0
    };

    this.tables.push(table);

    return table;
  }
}