import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { UserCreateDto } from './dto/user-create.dto';
import { UserUpdateDto } from './dto/user-update.dto';
import { UserService } from './user.service';
import { JwtAuthGuard } from '../auth/strategy/jwt-auth.guard';

@Controller('users')
@ApiTags("Usuários")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  findOne(@Param('id') id: number) {
    return this.userService.findOne(id);
  }

  @Get('name/:name')
  @UseGuards(JwtAuthGuard)
  findOneByName(@Param('name') name: string) {
    return this.userService.findOneByName(name);
  }

  @Post('register')
  @ApiBody({ type: UserCreateDto })
  create(@Body() body: UserCreateDto) {
    return this.userService.create(body);
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBody({ type: UserUpdateDto })
  update(@Param('id') id: number, @Body() body: UserUpdateDto) {
    return this.userService.update(id, body);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  delete(@Param('id') id: number) {
    return this.userService.delete(id);
  }
}
