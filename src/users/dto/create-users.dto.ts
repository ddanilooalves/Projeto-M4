import { IsNumber, IsPositive, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUsersDto {
  @IsNumber()
  @IsPositive()
  @ApiProperty({
    description: 'Insira os dados',
    example: 0,
  })
  number: number;
}