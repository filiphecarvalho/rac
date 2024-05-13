import { ApiProperty, PartialType } from "@nestjs/swagger";
import { IsBoolean, IsNotEmpty, Length } from "class-validator";
import { CreateDto } from "../../../base/dtos/create-base.dto";

export class CreateCategoriaDto extends PartialType(CreateDto){

    @ApiProperty()
    @IsNotEmpty({ message: 'Campo Descrição é obrigatório!' })
    @Length(0, 30, { message: 'Campo Descrição deve ter no máximo 30 caracteres' })  
    descricao: string;
  
    @ApiProperty()
    @IsNotEmpty({ message: 'Campo Sígla CRM é obrigatório!' })
    @Length(0, 10, { message: 'Campo Sigla do CRM deve ter no máximo 30 caracteres' })
    sigla_crm: string;

    @ApiProperty({description: "Informa se é uma categoria médica."})
    @IsBoolean()
    isMedico: boolean;  
}
