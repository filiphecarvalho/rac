import { Injectable } from '@nestjs/common';
import { ServicoBase } from '../../base/services/service.base';
import { Naturalidade } from './entities/naturalidade.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class NaturalidadeService extends ServicoBase<Naturalidade> {
  constructor(
    @InjectRepository(Naturalidade)
    repo: Repository<Naturalidade>    
  ) {
    super(repo);
    this.name = "Naturalidade";
  }  
}