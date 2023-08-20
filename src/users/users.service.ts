import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from "@nestjs/mongoose"
import { User, UserDocument, userSchema } from "./schema/user.schema"
import { Model } from 'mongoose';

@Injectable()
export class UsersService {

  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>){}

  async create(createUserDto: CreateUserDto) {
    try {
      return await this.userModel.create(createUserDto)
    } catch (error) {
      console.log(error);
      
    }
  }

  async findAll() {
    try {
      return await this.userModel.find()
    } catch (error) {
      console.log(error);
      
    }
  }

  async findOne(id: string) {
    try {
      return await this.userModel.findOne({ _id: id })
    } catch (error) {
      console.log(error);
      
    }
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
