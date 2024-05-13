import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Relation } from "typeorm";
import { ObjetoBaseComCodigoNumerico } from "../../../base/entities/baseComCodigoNumerico.entity";
import { Cepe } from "../../cepe/entities/cepe.entity";

@Entity()
export class Empresa extends ObjetoBaseComCodigoNumerico {
  @PrimaryGeneratedColumn()
  codigo: number;

  @Column({ length: 50, nullable: true })
  razao_social: string;

  @Column({ length: 20, nullable: true })
  nome_fantasia: string;

  @Column({ length: 60, nullable: true })
  nome_empresa: string;

  @Column({ length: 5, nullable: true })
  numero: string;

  @Column({ length: 30, nullable: true })
  complemento: string;

  @Column({ length: 60, nullable: true })
  bairro: string;

  @Column({ length: 60, nullable: true })
  cidade: string;

  @Column({ length: 2, nullable: true })
  uf: string;

  @ManyToOne(() => Cepe, { eager: true, cascade: true })
  @JoinColumn({referencedColumnName: "codigo"})
  cepe: Relation<Cepe>;

  @Column({ length: 11, nullable: true })
  telefone_1: string;

  @Column({ length: 11, nullable: true })
  telefone_2: string;

  @Column({ length: 100, nullable: true })
  email: string;

  @Column({ length: 200, nullable: true })
  homepage: string;

  @Column({ length: 18, nullable: true })
  cnpj: string;

  @Column({ length: 18, nullable: true })
  inscricao_estadual: string;

  @Column({ length: 18, nullable: true })
  inscricao_municipal: string;

  @Column({ length: 30, nullable: true })
  nome_representante: string;

  @Column({ length: 10, nullable: true })
  numero_licenca: string;

  @Column({ length: 11, nullable: true })
  cpf_diretor_clinica: string;
}
