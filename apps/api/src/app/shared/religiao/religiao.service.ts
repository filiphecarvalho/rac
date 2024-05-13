import { Injectable } from '@nestjs/common';
import { Religiao } from './entities/religiao.entity';
import { ServicoBase } from '../../base/services/service.base';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ReligiaoService extends ServicoBase<Religiao> {
  constructor(
    @InjectRepository(Religiao)
    repo: Repository<Religiao>    
  ) {
    super(repo);
    this.name = "Religiao";
  }  
}