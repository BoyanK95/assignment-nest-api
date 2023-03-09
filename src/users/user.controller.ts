import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { User } from './user.model';
import { UserService } from './user.service';

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
  createUser(@Body() createUserDto: any): Promise<User> {
    return this.usersService.create(createUserDto);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Promise<User> {
    return this.usersService.delete(id)
  }
}
