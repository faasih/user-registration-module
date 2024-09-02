import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtAuthGuard } from 'src/helpers/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('me')
  async getLoggedInUserDetails(@Req() req) {
    const loggedInUserId = req.user.id;
    return await this.usersService.getLoggedInUserDetails(loggedInUserId);
  }
}
