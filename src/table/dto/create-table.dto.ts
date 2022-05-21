import { IsNumber, IsPositive } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTableDto {
  @IsNumber()
  @IsPositive()
  @ApiProperty({
    description: 'O número do usuário',
    example: 1,
  })
  number: number;
}