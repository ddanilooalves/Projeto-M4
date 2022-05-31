import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma/prisma.service';
import { CreateUsersDto } from './dto/create-users.dto';
import { Users } from './entities/users.entity';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  findAll(): Promise<Users[]> {
    return this.prisma.user.findMany();
  }

  findOne(id: string): Promise<Users> {
    return this.prisma.user.findUnique({ where: { id } });
  }

  create(dto: CreateUsersDto): Promise<Users> {
    const data: Users = {
      ...dto,
      number: 0,
      name: '',
      email: '',
      password: '',
      cpf: 0,
      isAdmin: '',
    };
 
    return this.prisma.user.create({ data });
  }
}