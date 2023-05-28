
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserModel } from './user.model';

@Injectable()
export class UserService {
  constructor(@InjectModel(UserModel.name) private userModel: Model<UserModel>) {}

  async findByUsername(username: string): Promise<UserModel | null> {
    return this.userModel.findOne({ username }).exec();
  }
}
