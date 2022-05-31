import { CreateUsersDto } from './dto/create-users.dto';
import { Users } from './entities/users.entity';
import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    findAll(): Promise<Users[]>;
    findOne(id: string): Promise<Users>;
    create(dto: CreateUsersDto): Promise<Users>;
}
