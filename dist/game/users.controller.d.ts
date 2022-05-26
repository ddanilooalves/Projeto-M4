import { CreateUserDto } from './dto/create-users.dto';
import { UsersService } from './users.service';
export declare class TableController {
    private usersService;
    constructor(usersService: UsersService);
    findAll(): import("./entities/users.entity").Users[];
    create(createTableDto: CreateUserDto): import("./entities/users.entity").Users;
}
