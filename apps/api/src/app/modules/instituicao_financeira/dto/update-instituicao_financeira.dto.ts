import { PartialType } from '@nestjs/swagger';
import { CreateInstituicaoFinanceiraDto } from './create-instituicao_financeira.dto';

export class UpdateInstituicaoFinanceiraDto extends PartialType(CreateInstituicaoFinanceiraDto) {}
