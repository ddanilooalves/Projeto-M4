import { CreateUserDto } from './dto/create-users.dto';
import { Users } from './entities/users.entity';
export declare class UsersService {
    tables: Users[];
    findAll(): Users[];
    create(createTableDto: CreateUserDto): Users;
}
