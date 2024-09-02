import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Users } from '../schemas/users.schema';
import * as mongoose from 'mongoose';
import { Encryption } from 'src/helpers/cryptography';
import {
  USER_CREATED_SUCCESS_MSG,
  USER_EXISTS_MSG,
  USER_NOT_FOUND_MSG,
} from 'src/helpers/resource_en';
import { InjectMapper } from '@automapper/nestjs';
import { Mapper } from '@automapper/core';
import { UserDto } from './dtos/user.dto';
import { SignUpDto } from 'src/auth/dtos/auth.dto';

@Injectable()
export class UsersService {
  private logger: Logger;
  constructor(
    @InjectModel(Users.name)
    private userModel: mongoose.Model<Users>,
    private readonly encryption: Encryption,
    @InjectMapper()
    private mapper: Mapper,
  ) {
    this.logger = new Logger(UsersService.name);
  }

  async getAllUsers() {
    const users = await this.userModel.find();
    this.logger.log('Users', users);
    return users;
  }

  // This method is used for fetching details of the logged in user.
  async getLoggedInUserDetails(loggedInUserId: string) {
    try {
      this.logger.log('getLoggedInUserDetails started');
      const userDetails = await this.userModel.findOne({
        _id: loggedInUserId,
      });
      this.logger.log(
        `fetched user details against user id: ${loggedInUserId}`,
        userDetails,
      );
      if (userDetails) {
        const normalizedUser = this.mapper.map(userDetails, Users, UserDto);
        return normalizedUser;
      }
    } catch (err) {
      this.logger.error('Error at getLoggedInUserDetails', err);
    }
  }

  // This method is used for creating a new user in the system.
  async createUser(payload: SignUpDto) {
    const session = await this.userModel.db.startSession();
    session.startTransaction();

    try {
      const isUserExist = await this.userModel.findOne({
        emailAddress: payload.emailAddress,
      });

      this.logger.log('User already exists', isUserExist);

      if (!isUserExist) {
        const { password } = payload;
        const obj = {
          ...payload,
          password: this.encryption.encrypt(password),
        };
        const user = await this.userModel.create(obj);
        await session.commitTransaction();
        this.logger.log('user created', user);
        return {
          message: USER_CREATED_SUCCESS_MSG,
          user,
        };
      } else {
        throw new BadRequestException(USER_EXISTS_MSG);
      }
    } catch (err) {
      await session.abortTransaction();
      this.logger.error('Error while creating user', err);
      throw err;
    }
  }

  // This method is used for fetching user details as per the provided email address.
  async findUserByEmail(email: string) {
    try {
      const userDetails = await this.userModel.findOne({ emailAddress: email });

      if (userDetails) {
        return userDetails;
      } else {
        throw new BadRequestException(USER_NOT_FOUND_MSG);
      }
    } catch (err) {
      this.logger.error('Error at FindUserByEmail', err);
      throw err;
    }
  }
}
