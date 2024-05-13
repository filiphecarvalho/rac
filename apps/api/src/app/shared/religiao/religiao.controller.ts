import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReligiaoService } from './religiao.service';
import { CreateReligiaoDto } from './dto/create-religiao.dto';
import { UpdateReligiaoDto } from './dto/update-religiao.dto';
import { ApiExcludeController, ApiTags } from '@nestjs/swagger';

@Controller('religiao')
@ApiTags('Religião')
@ApiExcludeController(true)
export class ReligiaoController {
  constructor(private readonly religiaoService: ReligiaoService) {}

  @Post()
  create(@Body() createReligiaoDto: CreateReligiaoDto) {
    return this.religiaoService.create(createReligiaoDto);
  }

  @Get()
  findAll() {
    return this.religiaoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.religiaoService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReligiaoDto: UpdateReligiaoDto) {
    return this.religiaoService.update(id, updateReligiaoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.religiaoService.delete(id);
  }
}

