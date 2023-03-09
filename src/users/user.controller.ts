import { Body, Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
import { User } from './user.model';
import { UserService } from './user.service';
import { CreateUserDto } from 'src/auth/dtos/create-user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly usersService: UserService) {}

  @Get()
  findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<User> {
    return this.usersService.findOne(id);
  }

  @Post()
  createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.create(createUserDto);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Promise<User> {
    return this.usersService.delete(id)
  }
}
