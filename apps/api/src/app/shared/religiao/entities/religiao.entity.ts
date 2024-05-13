import { Column, Entity } from "typeorm";
import { ObjetoBaseComCodigoNumerico } from "../../../base/entities/baseComCodigoNumerico.entity";

@Entity()
export class Religiao extends ObjetoBaseComCodigoNumerico {

    @Column()
    descricao: string;
}

