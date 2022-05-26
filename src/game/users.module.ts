import { Module } from '@nestjs/common';
import { TableController } from './users.controller';
import { TableService } from './users.service';

@Module({
  controllers: [TableController],
  providers: [TableService],
})
export class TableModule {}