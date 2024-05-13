import { Module } from '@nestjs/common';
import { ProfissionalService } from './profissional.service';
import { ProfissionalController } from './profissional.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Empresa } from '../empresa/entities/empresa.entity';
import { Cepe } from '../cepe/entities/cepe.entity';
import { Categoria } from '../categoria/entities/categoria.entity';
import { Profissional } from './entities/profissional.entity';
import { Raca } from '../raca/entities/raca.entity';
import { InstituicaoFinanceira } from '../instituicao_financeira/entities/instituicao_financeira.entity';
import { EstadoCivil } from '../estado_civil/entities/estado_civil.entity';
import { Naturalidade } from '../../shared/naturalidade/entities/naturalidade.entity';
import { Pais } from '../../shared/pais/entities/pais.entity';
import { Escolaridade } from '../../shared/escolaridade/entities/escolaridade.entity';
import { Religiao } from '../../shared/religiao/entities/religiao.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Empresa, 
      Cepe, 
      Categoria, 
      Raca, 
      InstituicaoFinanceira, 
      EstadoCivil,  
      Profissional,
      Naturalidade,
      Pais,
      Escolaridade,
      Religiao
    ])
  ],
  controllers: [ProfissionalController],
  providers: [ProfissionalService],
  exports: [ProfissionalService],
})
export class ProfissionalModule {}

