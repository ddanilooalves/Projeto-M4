import { CreateUserDto } from './dto/create-table.dto';
import { Table } from './entities/table.entity';
export declare class TableService {
    tables: Table[];
    findAll(): Table[];
    create(createTableDto: CreateUserDto): Table;
}
