import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NaturalidadeService } from './naturalidade.service';
import { CreateNaturalidadeDto } from './dto/create-naturalidade.dto';
import { UpdateNaturalidadeDto } from './dto/update-naturalidade.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('naturalidade')
@ApiTags('Naturalidade')
export class NaturalidadeController {
  constructor(private readonly naturalidadeService: NaturalidadeService) {}

  @Post()
  create(@Body() CreateNaturalidadeDto: CreateNaturalidadeDto) {
    return this.naturalidadeService.create(CreateNaturalidadeDto);
  }

  @Get()
  findAll() {
    return this.naturalidadeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.naturalidadeService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatenaturalidadeDto: UpdateNaturalidadeDto) {
    return this.naturalidadeService.update(id, updatenaturalidadeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.naturalidadeService.delete(id);
  }
}
