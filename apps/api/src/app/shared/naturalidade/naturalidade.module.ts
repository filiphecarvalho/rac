import { Module } from '@nestjs/common';
import { NaturalidadeService } from './naturalidade.service';
import { NaturalidadeController } from './naturalidade.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Naturalidade } from './entities/naturalidade.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Naturalidade])],
  controllers: [NaturalidadeController],
  providers: [NaturalidadeService],
  exports: [NaturalidadeService],
})
export class NaturalidadeModule {}
