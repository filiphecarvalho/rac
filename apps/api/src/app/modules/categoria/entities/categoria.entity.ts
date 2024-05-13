import {
    Column,
    Entity
  } from "typeorm";
import { ObjetoBaseComCodigoNumerico } from "../../../base/entities/baseComCodigoNumerico.entity";
  
@Entity({ name: 'categorias' })
export class Categoria extends ObjetoBaseComCodigoNumerico {
  
  @Column({length: 30})
  descricao: string;

  @Column({length: 10})
  sigla_crm: string;

  @Column({type: "boolean"})
  isMedico: boolean;  
}
