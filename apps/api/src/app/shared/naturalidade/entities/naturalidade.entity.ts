import { Column, Entity } from "typeorm";
import { ObjetoBaseComCodigoNumerico } from "../../../base/entities/baseComCodigoNumerico.entity";

@Entity()
export class Naturalidade extends ObjetoBaseComCodigoNumerico {

    @Column()
    descricao: string;

    @Column({length: 2})
    uf: string;
}
