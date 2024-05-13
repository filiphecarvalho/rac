import { ApiProperty, PartialType } from "@nestjs/swagger";
import { CreateDto } from "../../../base/dtos/create-base.dto";
import { CreateEmpresaDto } from "../../empresa/dto/create-empresa.dto";
import { IsBoolean, IsDate, IsObject } from "class-validator";
import { CreateCategoriaDto } from "../../categoria/dto/create-categoria.dto";
import { ApiPropLengthValidations } from "../../../utils/decorators/api-property.decorator";
import { CreateCepeDto } from "../../cepe/dto/create-cepe.dto";
import { CreateRacaDto } from "../../raca/dto/create-raca.dto";
import { CreateInstituicaoFinanceiraDto } from '../../instituicao_financeira/dto/create-instituicao_financeira.dto';
import { CreateEstadoCivilDto } from "../../estado_civil/dto/create-estado_civil.dto";
import { CreatePaisDto } from "../../../shared/pais/dto/create-pais.dto";
import { CreateEscolaridadeDto } from "../../../shared/escolaridade/dto/create-escolaridade.dto";
import { CreateNaturalidadeDto } from "../../../shared/naturalidade/dto/create-naturalidade.dto";
import { CreateReligiaoDto } from "../../../shared/religiao/dto/create-religiao.dto";

export class CreateProfissionalDto extends PartialType(CreateDto) {
  @ApiProperty({ type: CreateEmpresaDto })
  @IsObject()
  empresa: CreateEmpresaDto;

  @ApiProperty({ type: CreateCategoriaDto })
  @IsObject()
  categoria: CreateCategoriaDto;

  @ApiProperty({ type: CreateRacaDto })
  @IsObject()
  raca: CreateRacaDto;

  @ApiProperty({ type: CreateInstituicaoFinanceiraDto })
  @IsObject()
  instituicao_financeira: CreateInstituicaoFinanceiraDto;

  @ApiProperty({ type: CreateEstadoCivilDto })
  @IsObject()
  estado_civil: CreateEstadoCivilDto;

  @ApiProperty({ type: CreateReligiaoDto })
  @IsObject()
  religiao: CreateReligiaoDto;

  @ApiProperty({ type: CreateNaturalidadeDto })
  @IsObject()
  naturalidade: CreateNaturalidadeDto;

  @ApiProperty({ type: CreateEscolaridadeDto })
  @IsObject()
  escolaridade: CreateEscolaridadeDto;

  @ApiProperty({ type: CreatePaisDto })
  @IsObject()
  pais_origem: CreatePaisDto;

  @ApiPropLengthValidations({ min: 0, max: 250 })
  nome: string;

  @ApiPropLengthValidations({ min: 0, max: 250 })
  nome_social: string;

  @ApiPropLengthValidations({ min: 0, max: 250 })
  apelido: string;

  @ApiPropLengthValidations({ min: 0, max: 250 })
  endereco: string;

  @ApiPropLengthValidations({ min: 0, max: 20 })
  numero: string;

  @ApiPropLengthValidations({ min: 0, max: 250 })
  complemento: string;

  @ApiPropLengthValidations({ min: 0, max: 250 })
  bairro: string;

  @ApiPropLengthValidations({ min: 0, max: 250 })
  cidade: string;

  @ApiPropLengthValidations({ min: 0, max: 2 })
  uf: string;

  @ApiProperty({ type: CreateCepeDto })
  @IsObject()
  cepe: CreateCepeDto;

  @ApiPropLengthValidations({ min: 0, max: 10 })
  telefone1: string;

  @ApiPropLengthValidations({ min: 0, max: 10 })
  telefone2: string;

  @ApiPropLengthValidations({ min: 0, max: 150 })
  email: string;

  @ApiPropLengthValidations({ min: 0, max: 11 })
  cpf: string;

  @ApiPropLengthValidations({ min: 0, max: 10 })
  numero_conselho: string;

  @ApiPropLengthValidations({ min: 0, max: 10 })
  numero_matricula: string;

  @ApiProperty({ type: Date })
  @IsDate()
  data_nascimento: Date;

  @ApiPropLengthValidations({ min: 0, max: 1 })
  sexo: string;

  @ApiPropLengthValidations({ min: 0, max: 2 })
  uf_conselho: string;

  @ApiPropLengthValidations({ min: 0, max: 20 })
  numero_cns: string;

  @ApiPropLengthValidations({ min: 0, max: 50 })
  numero_pis: string;

  @ApiPropLengthValidations({ min: 0, max: 250 })
  nome_mae: string;

  @ApiPropLengthValidations({ min: 0, max: 250 })
  nome_pai: string;

  @ApiPropLengthValidations({ min: 0, max: 1 })
  sigla_nacionalidade: string;

  @ApiProperty({ type: Boolean })
  @IsBoolean()
  utiliza_cni: boolean;

  @ApiPropLengthValidations({ min: 11, max: 11 })
  identidade: string;

  @ApiPropLengthValidations({ min: 2, max: 2 })
  identidade_uf: string;

  @ApiProperty({ type: Date })
  @IsDate()
  identidade_data_emissao: Date;

  @ApiPropLengthValidations({ min: 0, max: 250 })
  identidade_origem: string;

  @ApiPropLengthValidations({ min: 0, max: 10 })
  numero_agencia: string;

  @ApiPropLengthValidations({ min: 0, max: 10 })
  numero_conta: string;

  @ApiProperty({ type: Date })
  @IsDate()
  data_abertura_conta: Date;

  @ApiProperty({ type: Date })
  @IsDate()
  data_fechamento_conta: Date;

  @ApiProperty({ type: Boolean })
  @IsBoolean()
  is_ativo: boolean;

  @ApiProperty({ type: Boolean })
  @IsBoolean()
  is_atende_sus: boolean;

  @ApiProperty({ type: Boolean })
  @IsBoolean()
  is_credenciado_secretaria: boolean;
}
