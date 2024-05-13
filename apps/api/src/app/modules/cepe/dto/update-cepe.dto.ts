import { PartialType } from '@nestjs/swagger';
import { CreateCepeDto } from './create-cepe.dto';

export class UpdateCepeDto extends PartialType(CreateCepeDto) {}
