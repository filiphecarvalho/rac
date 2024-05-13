import { Injectable } from '@nestjs/common';
import { Categoria } from './entities/categoria.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ServicoBase } from '../../base/services/service.base';

@Injectable()
export class CategoriaService extends ServicoBase<Categoria> {
  constructor(
    @InjectRepository(Categoria)
    repo: Repository<Categoria>,
    
  ) {
    super(repo);
    this.name = "Categoria";
  }  
}
