import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto, SignUpDto } from './dtos/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('getUsers')
  async getAllUsers() {
    return await this.authService.getAllUsers();
  }

  @Post('sign-up')
  async signUpUser(@Body() dto: SignUpDto) {
    return await this.authService.createUser(dto);
  }

  @Post('sign-in')
  async signInUser(@Body() dto: SignInDto) {
    return await this.authService.loginUser(dto);
  }
}
