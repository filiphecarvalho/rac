import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ServicoBase } from '../../base/services/service.base';
import { InjectRepository } from '@nestjs/typeorm';
import { Profissional } from './entities/profissional.entity';

@Injectable()
export class ProfissionalService extends ServicoBase<Profissional> {
  constructor(
    @InjectRepository(Profissional)
    repo: Repository<Profissional>    
  ) {
    super(repo);
    this.name = "Profissional";
  }  
}