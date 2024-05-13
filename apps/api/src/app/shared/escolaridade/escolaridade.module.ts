import { Module } from '@nestjs/common';
import { EscolaridadeService } from './escolaridade.service';
import { EscolaridadeController } from './escolaridade.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Escolaridade } from './entities/escolaridade.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Escolaridade])],
  controllers: [EscolaridadeController],
  providers: [EscolaridadeService],
  exports: [EscolaridadeService],
})
export class EscolaridadeModule {}
