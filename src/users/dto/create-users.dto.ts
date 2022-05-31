import { IsNumber, IsPositive, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUsersDto {
  @IsNumber()
  @IsPositive()
  @ApiProperty({
    description: 'Insira os dados',
    examples: [{
    number: 0,
    name: '',
    email: '',
    password: '',
    cpf: 0,
    isAdmin: ''
  }]
  })
  number: any;
}