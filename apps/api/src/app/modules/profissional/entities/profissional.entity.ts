
import { Column, Entity, JoinColumn, ManyToOne, Relation } from "typeorm";
import { ObjetoBaseComCodigoNumerico } from "../../../base/entities/baseComCodigoNumerico.entity";
import { Empresa } from "../../empresa/entities/empresa.entity";
import { Categoria } from "../../categoria/entities/categoria.entity";
import { Cepe } from "../../cepe/entities/cepe.entity";
import { Raca } from "../../raca/entities/raca.entity";
import { InstituicaoFinanceira } from "../../instituicao_financeira/entities/instituicao_financeira.entity";
import { EstadoCivil } from "../../estado_civil/entities/estado_civil.entity";
import { Religiao } from "../../../shared/religiao/entities/religiao.entity";
import { Naturalidade } from "../../../shared/naturalidade/entities/naturalidade.entity";
import { Escolaridade } from "../../../shared/escolaridade/entities/escolaridade.entity";
import { Pais } from "../../../shared/pais/entities/pais.entity";

@Entity()
export class Profissional extends ObjetoBaseComCodigoNumerico {
  @ManyToOne(() => Empresa)
  @JoinColumn()
  empresa: Relation<Empresa>;

  @ManyToOne(() => Categoria)
  @JoinColumn()
  categoria: Relation<Categoria>;

  @ManyToOne(() => Raca)
  @JoinColumn()
  raca: Relation<Raca>;

  @ManyToOne(() => InstituicaoFinanceira)
  @JoinColumn()
  instituicao_financeira: Relation<InstituicaoFinanceira>;

  @ManyToOne(() => EstadoCivil)
  @JoinColumn()
  estado_civil: Relation<EstadoCivil>;

  @ManyToOne(() => Religiao)
  @JoinColumn()
  religiao: Relation<Religiao>;

  @ManyToOne(() => Naturalidade)
  @JoinColumn()
  naturalidade: Relation<Naturalidade>;

  @ManyToOne(() => Escolaridade)
  @JoinColumn()
  escolaridade: Relation<Escolaridade>;

  @ManyToOne(() => Pais)
  @JoinColumn()  
  pais_origem: Relation<Pais>

  // CD_NATU_FK VARCHAR2(6) NULL, -- naturalidade
  // CD_ESCOL_FK VARCHAR2(6) NULL, --escolaridade
  // CD_PAOR_NACE_FK VARCHAR2(2) NULL,  -- pais de origem

  @Column()
  nome: string;

  @Column()
  nome_social: string;

  @Column()
  apelido: string;

  @Column()
  endereco: string;

  @Column()
  numero: string;

  @Column()
  complemento: string;

  @Column()
  bairro: string;

  @Column()
  cidade: string;

  @Column({ length: 2 })
  uf: string;

  @ManyToOne(() => Cepe, { eager: true })
  @JoinColumn()
  cepe: Relation<Cepe>;

  @Column({ length: 25 })
  telefone1: string;

  @Column({ length: 25 })
  telefone2: string;

  @Column()
  email: string;

  @Column({ length: 20 })
  cpf: string;

  @Column()
  numero_conselho: string;

  @Column()
  numero_matricula: string;

  @Column({ type: 'date' })
  data_nascimento: Date;

  @Column()
  sexo: string;

  @Column({ length: 2 })
  uf_conselho: string;

  @Column()
  numero_cns: string;

  @Column()
  numero_pis: string;

  @Column()
  nome_mae: string;

  @Column()
  nome_pai: string;

  @Column({ length: 1 })
  sigla_nacionalidade: string;

  @Column({ type: 'boolean' })
  utiliza_cni: boolean;

  @Column({ length: 11 })
  identidade: string;

  @Column({ length: 2 })
  identidade_uf: string;

  @Column({ type: 'date' })
  identidade_data_emissao: Date;

  @Column()
  identidade_origem: string;

  @Column({ length: 6 })
  numero_agencia: string;

  @Column({ length: 6 })
  numero_conta: string;

  @Column({ type: 'date' })
  data_abertura_conta: Date;

  @Column({ type: 'date' })
  data_fechamento_conta: Date;

  @Column({ type: 'boolean' })
  is_ativo: boolean;

  @Column({ type: 'boolean' })
  is_atende_sus: boolean;

  @Column({ type: 'boolean' })
  is_credenciado_secretaria: boolean;
}
