import { PartialType } from '@nestjs/swagger';
import { CreateReligiaoDto } from './create-religiao.dto';

export class UpdateReligiaoDto extends PartialType(CreateReligiaoDto) {}
