import {
  Column,
    Entity,
    PrimaryColumn
  } from "typeorm";
import { ObjetoBaseComCodigoLiteral } from "../../../base/entities/baseComCodigoLiteral.entity";


@Entity("cepe")
export class Cepe extends ObjetoBaseComCodigoLiteral {

  @PrimaryColumn({length: 9})
  codigo: string;
    
  @Column({length: 140, nullable: true})
  logradouro: string;

  @Column({length: 100, nullable: true})
	referencia_logradouro: string;

  @Column({length: 36, nullable: true})
	tipo_logradouro: string;

  @Column({length: 60, nullable: true})
	endereco_bairro_inicio: string;
	
  @Column({length: 60, nullable: true})
  endereco_bairro_fim: string;

  @Column({length: 60, nullable: true})
	endereco_cidade: string;

  @Column({length: 2, nullable: true})
	uf_logradouro: string;

  @Column({length: 7, nullable: true})
	codigo_ibge: string;
	
  @Column({type: "boolean", nullable: true})
  importado: boolean;

}
