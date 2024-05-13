import { Injectable } from '@nestjs/common';
import { ServicoBase } from '../../base/services/service.base';
import { EstadoCivil } from './entities/estado_civil.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class EstadoCivilService extends ServicoBase<EstadoCivil> {
  constructor(
    @InjectRepository(EstadoCivil)
    repo: Repository<EstadoCivil>    
  ) {
    super(repo);
    this.name = "EstadoCivil";
  }  
}