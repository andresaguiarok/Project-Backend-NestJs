import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { ConfigService } from "@nestjs/config"

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService, private config: ConfigService){}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    if(!createUserDto.firtsName || !createUserDto.lastName || !createUserDto.email){
      throw new HttpException("fill in the empty fields", HttpStatus.BAD_REQUEST)
    }
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
