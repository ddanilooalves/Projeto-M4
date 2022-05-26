import { Module } from '@nestjs/common';
import { TableController } from './game.controller';
import { TableService } from './game.service';

@Module({
  controllers: [TableController],
  providers: [TableService],
})
export class TableModule {}