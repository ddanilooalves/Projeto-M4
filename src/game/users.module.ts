import { Module } from '@nestjs/common';
import { TableController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  controllers: [TableController],
  providers: [UsersService],
})
export class TableModule {}