import { CreateUserDto } from './dto/create-table.dto';
import { TableService } from './table.service';
export declare class TableController {
    private tableService;
    constructor(tableService: TableService);
    findAll(): import("./entities/table.entity").Table[];
    create(createTableDto: CreateUserDto): import("./entities/table.entity").Table;
}
