import { PartialType } from "@nestjs/swagger";
import { CreateDto } from "../../../base/dtos/create-base.dto";
import { ApiPropLengthValidations } from "../../../utils/decorators/api-property.decorator";

export class CreatePaisDto extends PartialType(CreateDto) {
    
    @ApiPropLengthValidations({min: 0, max: 250})
    descricao: string;
}

