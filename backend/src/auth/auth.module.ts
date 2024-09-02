import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { Encryption } from 'src/helpers/cryptography';
import { UsersService } from 'src/users/users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from '../schemas/users.schema';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { JWT_EXPIRY, JWT_SECRET } from 'src/helpers/constants';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Users', schema: UserSchema }]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        return {
          secret: config.get<string>(JWT_SECRET),
          signOptions: { expiresIn: config.get<string>(JWT_EXPIRY) },
        };
      },
    }),
  ],
  providers: [AuthService, Encryption, UsersService],
  controllers: [AuthController],
})
export class AuthModule {}
