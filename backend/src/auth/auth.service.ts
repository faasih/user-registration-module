import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { Encryption } from 'src/helpers/cryptography';
import { INVALID_CREDENTIALS_MSG } from 'src/helpers/resource_en';
import { InjectMapper } from '@automapper/nestjs';
import { Mapper } from '@automapper/core';
import { Users } from 'src/schemas/users.schema';
import { UserDto } from 'src/users/dtos/user.dto';
import { SignInDto, SignUpDto } from './dtos/auth.dto';

@Injectable()
export class AuthService {
  private logger: Logger;
  constructor(
    private readonly usersService: UsersService,
    private jwtService: JwtService,
    private encryption: Encryption,
    @InjectMapper()
    private mapper: Mapper,
  ) {
    this.logger = new Logger(AuthService.name);
  }

  async getAllUsers() {
    const users = await this.usersService.getAllUsers();
    return users;
  }

  // This method is used for singing up a new user to the system.
  async createUser(dto: SignUpDto) {
    try {
      this.logger.log('User signup started');
      const user = await this.usersService.createUser(dto);
      if (user) {
        const { user: userDetails } = user;
        this.logger.log('User created', JSON.stringify(user));
        const normalizedUser = this.mapper.map(userDetails, Users, UserDto);

        const token = this.jwtService.sign({
          id: normalizedUser.id,
          name: normalizedUser.name,
          email: normalizedUser.email,
        });

        return { accessToken: token };
      }
    } catch (err) {
      this.logger.error('Error at signup service', err.message);
      throw err;
    }
  }

  // This method is used for singing in a user to the system.
  async loginUser(dto: SignInDto) {
    try {
      this.logger.log('User login started');

      const { emailAddress, password } = dto;
      const user = await this.usersService.findUserByEmail(emailAddress);

      if (user) {
        const decryptedPassword = await this.encryption.decrypt(user.password);
        if (decryptedPassword === password) {
          const normalizedUser = this.mapper.map(user, Users, UserDto);

          const token = this.jwtService.sign({
            id: normalizedUser.id,
            name: normalizedUser.name,
            email: normalizedUser.email,
          });

          return { accessToken: token };
        } else {
          throw new BadRequestException(INVALID_CREDENTIALS_MSG);
        }
      }
    } catch (err) {
      this.logger.error('Error at login service', err.message);
      throw err;
    }
  }
}
