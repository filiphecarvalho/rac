import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EstadoCivilService } from './estado_civil.service';
import { CreateEstadoCivilDto } from './dto/create-estado_civil.dto';
import { UpdateEstadoCivilDto } from './dto/update-estado_civil.dto';
import { ApiExcludeController, ApiTags } from '@nestjs/swagger';

@Controller('estado-civil')
@ApiTags('Estado Cívil')
@ApiExcludeController(true)
export class EstadoCivilController {
  constructor(private readonly estadoCivilService: EstadoCivilService) {}

  @Post()
  create(@Body() createEstadoCivilDto: CreateEstadoCivilDto) {
    return this.estadoCivilService.create(createEstadoCivilDto);
  }

  @Get()
  findAll() {
    return this.estadoCivilService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.estadoCivilService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEstadoCivilDto: UpdateEstadoCivilDto) {
    return this.estadoCivilService.update(id, updateEstadoCivilDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.estadoCivilService.delete(id);
  }
}
