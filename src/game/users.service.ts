import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-users.dto';
import { Table } from './entities/users.entity';

@Injectable()
export class TableService {
  tables: Table[] = [];

  findAll() {
    return this.tables;
  }

  create(createTableDto: CreateUserDto) {
    const table: Table = {
      ...createTableDto,
      number: 0
    };

    this.tables.push(table);

    return table;
  }
}