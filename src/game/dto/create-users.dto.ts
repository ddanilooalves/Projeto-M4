import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUsersDto {
  @IsString()
  @ApiProperty({
    description: 'O nome de usuário',
    example: "random_id",
  })
  id: string;
}