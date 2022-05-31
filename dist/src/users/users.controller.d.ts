import { CreateUsersDto } from './dto/create-users.dto';
import { Users } from './entities/users.entity';
import { UsersService } from './users.service';
import { UpdateUsersDto } from './dto/update-table.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    findAll(): Promise<Users[]>;
    findOne(id: string): Promise<Users>;
    update(id: string, dto: UpdateUsersDto): Promise<Users>;
    create(dto: CreateUsersDto): Promise<Users>;
}
