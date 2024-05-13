import { ApiProperty } from '@nestjs/swagger';
import { Length } from 'class-validator';

export function ApiPropLengthValidations(lengthOptions?: any) {
  return function (object: Record<string, any>, propertyName: string) {
    ApiProperty()(object, propertyName);

    if (lengthOptions) {
      let { max, mim, message } = lengthOptions;
      Length(mim, max, {
        message:
          message ||
          `O Campo ${propertyName} deve ter no máximo ${max} caracteres`,
      })(object, propertyName);
    }
  };
}