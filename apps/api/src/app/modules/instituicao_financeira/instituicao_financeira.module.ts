import { Module } from '@nestjs/common';
import { InstituicaoFinanceiraService } from './instituicao_financeira.service';
import { InstituicaoFinanceiraController } from './instituicao_financeira.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InstituicaoFinanceira } from './entities/instituicao_financeira.entity';

@Module({
  imports: [TypeOrmModule.forFeature([InstituicaoFinanceira])],  
  controllers: [InstituicaoFinanceiraController],
  providers: [InstituicaoFinanceiraService],
  exports: [InstituicaoFinanceiraService]
})
export class InstituicaoFinanceiraModule {}
