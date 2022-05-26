import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-game.dto';
import { TableService } from './game.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Users')
@Controller()
export class TableController {
  constructor(private tableService: TableService) {}

  @Get('findAll')
  findAll() {
    return this.tableService.findAll();
  }

  @Post('create')
  create(@Body() createTableDto: CreateUserDto) {
    return this.tableService.create(createTableDto);
  }
}