import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InstituicaoFinanceiraService } from './instituicao_financeira.service';
import { CreateInstituicaoFinanceiraDto } from './dto/create-instituicao_financeira.dto';
import { UpdateInstituicaoFinanceiraDto } from './dto/update-instituicao_financeira.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('InstituicaoFinanceira')
@ApiTags('Instituição Financeira')
export class InstituicaoFinanceiraController {
  constructor(private readonly instituicaoFinanceiraService: InstituicaoFinanceiraService) {}

  @Post()
  create(@Body() createInstituicaoFinanceiraDto: CreateInstituicaoFinanceiraDto) {
    return this.instituicaoFinanceiraService.create(createInstituicaoFinanceiraDto);
  }

  @Get()
  findAll() {
    return this.instituicaoFinanceiraService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.instituicaoFinanceiraService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateInstituicaoFinanceiraDto: UpdateInstituicaoFinanceiraDto) {
    return this.instituicaoFinanceiraService.update(id, updateInstituicaoFinanceiraDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.instituicaoFinanceiraService.delete(id);
  }
}
