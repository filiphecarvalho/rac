import { Column, Entity } from "typeorm";
import { ObjetoBaseComCodigoNumerico } from "../../../base/entities/baseComCodigoNumerico.entity";

@Entity()
export class InstituicaoFinanceira  extends ObjetoBaseComCodigoNumerico {

    @Column()
    descricao: string;

    @Column()    
    numero: string;
}
