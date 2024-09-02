import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { BaseSchema } from './base.schema';

@Schema({
  timestamps: true,
})
export class Users extends BaseSchema {
  @Prop()
  name: string;

  @Prop()
  emailAddress: string;

  @Prop()
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(Users);
