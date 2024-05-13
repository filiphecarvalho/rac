import { Column, Entity } from "typeorm";
import { ObjetoBaseComCodigoNumerico } from "../../../base/entities/baseComCodigoNumerico.entity";

@Entity()
export class Escolaridade extends ObjetoBaseComCodigoNumerico {

    @Column()
    descricao: string;
}
