import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CepeService } from './cepe.service';
import { CreateCepeDto } from './dto/create-cepe.dto';
import { UpdateCepeDto } from './dto/update-cepe.dto';
import { ApiBody, ApiTags } from '@nestjs/swagger';

@Controller('cepe')
@ApiTags('CEPs')
export class CepeController {
  constructor(private readonly cepeService: CepeService) {}

  @Post()
  @ApiBody({type: CreateCepeDto})
  create(@Body() createCepeDto: CreateCepeDto) {
    return this.cepeService.create(createCepeDto);
  }

  @Get()
  findAll() {
    return this.cepeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cepeService.findOne(id);
  }

  @Get('buscarPorCep/:codigo')
  findByCodigo(@Param('codigo') codigo: string) {
    return this.cepeService.findByCodigo(codigo);
  }

  @Patch(':id')
  @ApiBody({type: UpdateCepeDto})
  update(@Param('id') id: string, @Body() updateCepeDto: UpdateCepeDto) {
    return this.cepeService.update(id, updateCepeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cepeService.delete(id);
  }
}
