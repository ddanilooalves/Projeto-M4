import { CreateTableDto } from './dto/create-table.fto';
import { Table } from './entities/table.entity';
export declare class TableService {
    tables: Table[];
    findAll(): Table[];
    create(createTableDto: CreateTableDto): Table;
}
