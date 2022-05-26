import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-users.dto';
import { UsersService } from './users.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Users')
@Controller()
export class TableController {
  constructor(private usersService: UsersService) {}

  @Get('findAll')
  findAll() {
    return this.usersService.findAll();
  }

  @Post('create')
  create(@Body() createTableDto: CreateUserDto) {
    return this.usersService.create(createTableDto);
  }
}