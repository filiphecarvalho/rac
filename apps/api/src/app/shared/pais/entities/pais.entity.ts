import { Column, Entity } from "typeorm";
import { ObjetoBaseComCodigoNumerico } from "../../../base/entities/baseComCodigoNumerico.entity";

@Entity()
export class Pais extends ObjetoBaseComCodigoNumerico {

    @Column()
    descricao: string;
}
