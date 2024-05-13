import { ApiProperty, PartialType } from "@nestjs/swagger";
import { CreateDto } from "../../../base/dtos/create-base.dto";
import { ApiPropLengthValidations } from "../../../utils/decorators/api-property.decorator";
import { CreateCepeDto } from "../../cepe/dto/create-cepe.dto";
import { IsObject } from "class-validator";

export class CreateEmpresaDto extends PartialType(CreateDto) {

    @ApiPropLengthValidations({min: 0, max: 50})
    razao_social: string;

    @ApiPropLengthValidations({min: 0, max: 20})
    nome_fantasia: string;
    
    @ApiPropLengthValidations({min: 0, max: 60})
    nome_empresa: string;
    @ApiPropLengthValidations({min: 0, max: 5})
    numero: string;
    @ApiPropLengthValidations({min: 0, max: 30})
    complemento: string;
    @ApiPropLengthValidations({min: 0, max: 60})
    bairro: string;
    @ApiPropLengthValidations({min: 0, max: 60})
    cidade: string;
    @ApiPropLengthValidations({min: 0, max: 2})
    uf: string;
  
    
  
    @ApiPropLengthValidations({min: 0, max: 11})
    telefone_1: string;
  
    @ApiPropLengthValidations({min: 0, max: 11})
    telefone_2: string;
  
    @ApiPropLengthValidations({min: 0, max: 100})
    email: string;
  
    @ApiPropLengthValidations({min: 0, max: 200})
    homepage: string;
  
    @ApiPropLengthValidations({min: 0, max: 18})
    cnpj: string;
  
    @ApiPropLengthValidations({min: 0, max: 18})
    inscricao_estadual: string;
  
    @ApiPropLengthValidations({min: 0, max: 18})
    inscricao_municipal: string;
  
    @ApiPropLengthValidations({min: 0, max: 30})
    nome_representante: string;
  
    @ApiPropLengthValidations({min: 0, max: 10})
    numero_licenca: string;
  
    @ApiPropLengthValidations({min: 0, max: 11})
    cpf_diretor_clinica: string;

    @ApiProperty({type: CreateCepeDto})
    @IsObject()
    cepe: CreateCepeDto;
}
