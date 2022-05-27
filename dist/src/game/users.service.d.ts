import { PrismaService } from 'prisma/prisma/prisma.service';
import { CreateUsersDto } from './dto/create-users.dto';
import { Users } from './entities/users.entity';
export declare class UsersService {
    private readonly prisma;
    tables: Users[];
    constructor(prisma: PrismaService);
    findAll(): any;
    create(createUsersDto: CreateUsersDto): Users;
}
