import { ApiProperty, PartialType } from "@nestjs/swagger";
import { IsNotEmpty, Length } from "class-validator";
import { CreateDto } from "../../../base/dtos/create-base.dto";

export class CreateCepeDto extends PartialType(CreateDto) {
  @ApiProperty()
  @IsNotEmpty({ message: 'Campo Código é obrigatório!' })
  @Length(0, 9, { message: 'Campo Código deve ter no máximo 9 caracteres' })
  codigo: string;

  @ApiProperty()
  @Length(0, 140, {
    message: 'Campo Logradouro deve ter no máximo 140 caracteres',
  })
  logradouro: string;

  @ApiProperty()
  @Length(0, 100, {
    message: 'Campo Referencia do Logradouro deve ter no máximo 100 caracteres',
  })
  referencia_logradouro: string;


  @ApiProperty()
  @Length(0, 36, {
    message: 'Campo Referencia do Tipo deve ter no máximo 36 caracteres',
  })
  tipo_logradouro: string;

  @ApiProperty()
  @Length(0, 60, {
    message: 'Campo Endereço do Bairro (Início) deve ter no máximo 60 caracteres',
  })
  endereco_bairro_inicio: string;

  @ApiProperty()
  @Length(0, 60, {
    message: 'Campo Endereço do Bairro (Fim) deve ter no máximo 60 caracteres',
  })
  endereco_bairro_fim: string;

  @ApiProperty()
  @Length(0, 60, {
    message: 'Campo Cidade deve ter no máximo 60 caracteres',
  })
  endereco_cidade: string;

  @ApiProperty()
  @Length(0, 2, {
    message: 'Campo UF deve ter no máximo 2 caracteres',
  })
  uf_logradouro: string;

  @ApiProperty()
  @Length(0, 7, {
    message: 'Campo Código IBGE deve ter no máximo 7 caracteres',
  })
  codigo_ibge: string;
}
