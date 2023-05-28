// user.model.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class UserModel {
  @Prop({ required: true })
  username: string;

  @Prop({ required: true })
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(UserModel);
