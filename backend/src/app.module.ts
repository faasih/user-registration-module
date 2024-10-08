import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { AutomapperModule } from '@automapper/nestjs';
import { classes } from '@automapper/classes';
import { globalErrorHandler } from './helpers/profile/error.handler';
import { CustomMappingProfile } from './helpers/mappers/mapping.profile';
import { Encryption } from './helpers/cryptography';
import { JwtStrategy } from './helpers/strategies/jwt.strategy';
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    AutomapperModule.forRoot({
      strategyInitializer: classes(),
      errorHandler: globalErrorHandler,
    }),
    MongooseModule.forRoot(process.env.DB_URI),
    AuthModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService, CustomMappingProfile, Encryption, JwtStrategy],
})
export class AppModule {}
