import { PartialType } from '@nestjs/swagger';
import { CreateNaturalidadeDto } from './create-naturalidade.dto';

export class UpdateNaturalidadeDto extends PartialType(CreateNaturalidadeDto) {}
