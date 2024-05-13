import { Injectable, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoggerService } from 'apps/api/src/logger/logger.service';
import bcryptjs from 'bcryptjs';
import { validate } from 'class-validator';
import { UserService } from '../user/user.service';
import { AuthRegisterDto } from './dto/auth-register.dto';
import { AuthLoginDto } from './dto/auth-login.dto';


@Injectable()
export class AuthService {
  constructor(
    private readonly logger: LoggerService = new Logger(AuthService.name),
    private jwtService: JwtService,
    private userservice: UserService,
  ) {}

  async login(user: any): Promise<Record<string, any>> {
    // Validation Flag
    let isOk = false;

    // Transform body into DTO
    const userDTO = new AuthLoginDto();
    userDTO.email = user.email;
    userDTO.password = user.password;
    
    // Validate DTO against validate function from class-validator
    await validate(userDTO).then((errors) => {
      if (errors.length > 0) {
        this.logger.debug(`${errors}`);
      } else {
        isOk = true;
      }
    });

    if (isOk) {
      // Get user information
      const userDetails = await this.userservice.findByEmail(user.email);

      // Check if user exists
      if (userDetails == null) {
        return { status: 401, msg: { msg: 'Usuário não localizado.' } };
      }

      // Check if the given password match with saved password
      const isValid = bcryptjs.compareSync(user.password, userDetails.password);

      if (isValid) {
        // Generate JWT token
        return {
          status: 200,
          msg: {
            email: user.email,
            name: userDetails.name,
            access_token: this.jwtService.sign({ name: user.name, email: user.email }),
          },
        };
      } else {
        // Password or email does not match
        return { status: 401, msg: { msg: 'Credenciais inválidas.' } };
      }
    } else {
      return { status: 400, msg: { msg: 'Campos inválidos.' } };
    }
  }

  async register(body: any): Promise<Record<string, any>> {
    // Validation Flag
    let isOk = false;

    // Transform body into DTO
    const userDTO = Object.assign(new AuthRegisterDto(), {
      ...body,
      password: bcryptjs.hashSync(body.password, 10)
    });
    
    // Validate DTO against validate function from class-validator
    await validate(userDTO).then((errors) => {
      if (errors.length > 0) {
        this.logger.debug(`${errors}`);
      } else {
        isOk = true;
      }
    });
    if (isOk) {
      await this.userservice.create(userDTO).catch((error) => {
        this.logger.debug(error.message);
        isOk = false;
      });
      if (isOk) {
        return { status: 201, content: { msg: 'Usuário criado com sucesso!' } };
      } else {
        return { status: 400, content: { msg: 'Usuário já existe.' } };
      }
    } else {
      return { status: 400, content: { msg: 'Invalid content' } };
    }
  }
}
