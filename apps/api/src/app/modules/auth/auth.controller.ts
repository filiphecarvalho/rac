import { Body, Controller, Post, Req, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserService } from '../user/user.service';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { AuthRegisterDto } from './dto/auth-register.dto';
import { AuthLoginDto } from './dto/auth-login.dto';

@Controller('auth')
@ApiTags("Autenticação")
export class AuthController {
  constructor(private authService: AuthService, private userService: UserService) {}

  @Post('login')
  @ApiBody({ type: AuthLoginDto })
  async login(@Req() req, @Res() res, @Body() body: AuthLoginDto) {
    const auth = await this.authService.login(body);
    res.status(auth.status).json(auth.msg);
    console.log("🚀 ~ AuthController ~ login ~ auth.msg:", auth.msg)
    
  }

  @Post('register')
  @ApiBody({ type: AuthRegisterDto })
  async register(@Req() req, @Res() res, @Body() body: AuthRegisterDto) {
    const auth = await this.authService.register(body);
    res.status(auth.status).json(auth.content);
  }
}
