import { Injectable } from '@nestjs/common';
import { ServicoBase } from '../../base/services/service.base';
import { Empresa } from './entities/empresa.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class EmpresaService extends ServicoBase<Empresa> {
  constructor(
    @InjectRepository(Empresa)
    repo: Repository<Empresa>,
    
  ) {
    super(repo);
    this.name = "Empresa";
  }  
}