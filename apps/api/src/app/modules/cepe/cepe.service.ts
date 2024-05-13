import { Injectable } from '@nestjs/common';
import { Cepe } from './entities/cepe.entity';
import { ServicoBase } from '../../base/services/service.base';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CepeService extends ServicoBase<Cepe> {
  constructor(
    @InjectRepository(Cepe)
    repo: Repository<Cepe>,
    
  ) {
    super(repo);
    this.name = "CEP";
  }  
}
