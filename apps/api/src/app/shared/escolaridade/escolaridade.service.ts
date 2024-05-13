import { Injectable } from '@nestjs/common';
import { ServicoBase } from '../../base/services/service.base';
import { Escolaridade } from './entities/escolaridade.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class EscolaridadeService extends ServicoBase<Escolaridade> {
  constructor(
    @InjectRepository(Escolaridade)
    repo: Repository<Escolaridade>    
  ) {
    super(repo);
    this.name = "Escolaridade";
  }  
}