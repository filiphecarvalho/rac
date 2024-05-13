import { Module } from '@nestjs/common';
import { EmpresaService } from './empresa.service';
import { EmpresaController } from './empresa.controller';
import { Empresa } from './entities/empresa.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cepe } from '../cepe/entities/cepe.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Empresa, Cepe])
  ],
  controllers: [EmpresaController],
  providers: [EmpresaService],
  exports: [EmpresaService],
})
export class EmpresaModule {}
