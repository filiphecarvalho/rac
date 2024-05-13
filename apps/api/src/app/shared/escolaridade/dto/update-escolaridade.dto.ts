import { PartialType } from '@nestjs/swagger';
import { CreateEscolaridadeDto } from './create-escolaridade.dto';

export class UpdateEscolaridadeDto extends PartialType(CreateEscolaridadeDto) {}
