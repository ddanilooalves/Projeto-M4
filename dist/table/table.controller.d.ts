import { CreateTableDto } from './dto/create-table.fto';
import { TableService } from './table.service';
export declare class TableController {
    private tableService;
    constructor(tableService: TableService);
    findAll(): import("./entities/table.entity").Table[];
    create(createTableDto: CreateTableDto): import("./entities/table.entity").Table;
}
