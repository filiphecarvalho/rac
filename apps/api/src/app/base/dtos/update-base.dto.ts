import { PartialType } from "@nestjs/swagger";
import { CreateDto } from "./create-base.dto";

export class UpdateDto extends PartialType(CreateDto){

}