import { Injectable } from '@nestjs/common';
import { ServicoBase } from '../../base/services/service.base';
import { Raca } from './entities/raca.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class RacaService extends ServicoBase<Raca> {
  constructor(
    @InjectRepository(Raca)
    repo: Repository<Raca>    
  ) {
    super(repo);
    this.name = "Raca";
  }  
}