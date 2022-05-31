import { PrismaService } from 'prisma/prisma/prisma.service';
import { CreateUsersDto } from './dto/create-users.dto';
import { UpdateUsersDto } from './dto/update-table.dto';
import { Users } from './entities/users.entity';
export declare class UsersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<Users[]>;
    findOne(id: string): Promise<Users>;
    create(dto: CreateUsersDto): Promise<Users>;
    update(id: string, dto: UpdateUsersDto): Promise<Users>;
}
