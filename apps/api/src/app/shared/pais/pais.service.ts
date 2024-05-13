import { Injectable } from '@nestjs/common';
import { Pais } from './entities/pais.entity';
import { ServicoBase } from '../../base/services/service.base';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PaisService extends ServicoBase<Pais> {
  constructor(
    @InjectRepository(Pais)
    repo: Repository<Pais>    
  ) {
    super(repo);
    this.name = "Pais";
  }  
}