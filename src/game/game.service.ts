import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-game.dto';
import { Table } from './entities/game.entity';

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