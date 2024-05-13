import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Generated,
  UpdateDateColumn,
} from 'typeorm';


/**
 * Objeto base que contém os atributos basicos para persistir dados no banco
 */
export abstract class ObjetoBase {

  @Column()
  @Generated('uuid')
  id: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt?: string;

  @UpdateDateColumn({ name: 'update_at' })
  updateAt?: string;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt?: string;
}
