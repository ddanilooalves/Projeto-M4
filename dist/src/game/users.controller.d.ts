import { CreateUsersDto } from './dto/create-users.dto';
import { UsersService } from './users.service';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    findAll(): any;
    create(createUsersDto: CreateUsersDto): import("./entities/users.entity").Users;
}
