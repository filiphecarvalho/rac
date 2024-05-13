import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RacaService } from './raca.service';
import { CreateRacaDto } from './dto/create-raca.dto';
import { UpdateRacaDto } from './dto/update-raca.dto';
import { ApiExcludeController, ApiTags } from '@nestjs/swagger';

@Controller('raca')
@ApiTags('Raça')
@ApiExcludeController(true)
export class RacaController {
  constructor(private readonly racaService: RacaService) {}

  @Post()
  create(@Body() createracaDto: CreateRacaDto) {
    return this.racaService.create(createracaDto);
  }

  @Get()
  findAll() {
    return this.racaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.racaService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateracaDto: UpdateRacaDto) {
    return this.racaService.update(id, updateracaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.racaService.delete(id);
  }
}

