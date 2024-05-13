import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ServicoBase } from '../../base/services/service.base';
import { InstituicaoFinanceira } from './entities/instituicao_financeira.entity';

@Injectable()
export class InstituicaoFinanceiraService extends ServicoBase<InstituicaoFinanceira> {
  constructor(
    @InjectRepository(InstituicaoFinanceira)
    repo: Repository<InstituicaoFinanceira>    
  ) {
    super(repo);
    this.name = "InstituicaoFinanceira";
  }  
}