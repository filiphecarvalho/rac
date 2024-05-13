import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  Length,
} from 'class-validator';

export class AuthLoginDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'Campo email é obrigatório!' })
  @Length(0, 100, { message: 'Campo email deve ter no máximo 100 caracteres' })
  @IsEmail({}, { message: 'Campo email deve conter um email válido' })
  email: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Campo senha é obrigatório!' })
  password: string;  
}
