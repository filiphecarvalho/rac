import {
    PrimaryGeneratedColumn
  } from 'typeorm';
import { ObjetoBase } from './base.entity';
  
  
  /**
   * Objeto base que contém os atributos basicos para persistir dados no banco
   */
  export abstract class ObjetoBaseComCodigoNumerico extends ObjetoBase  {
  
    @PrimaryGeneratedColumn('increment')
    codigo: number;
  
  }
  