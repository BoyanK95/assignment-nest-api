import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { User } from './user.model';
import { UserService } from './user.service';
import { CreateUserDto } from 'src/auth/dtos/create-user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly usersService: UserService) {}

  //Find all users/ route: http://localhost:3001/users
  @Get()
  findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  //Get one user
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<User> {
    const user = await this.usersService.findOne(id);

    if (!user) {
      throw new NotFoundException('User Not Found!');
    }
    return user;
  }

  @Get('/find/:email')
  async findOneByEmail(@Param('email') email: string): Promise<User> {
    const user = await this.usersService.findOneByEmail(email);

    if (!user) {
      throw new NotFoundException('User Not Found!');
    }
    return user;
  }

  // @Post('/signup')
  // createUser(@Body() body: CreateUserDto): Promise<User> {
  //   return this.usersService.create(body);
  // }

  //Delete user/ http://localhost:3001/users/:id
  @Delete(':id')
  delete(@Param('id') id: number): Promise<User> {
    return this.usersService.delete(id);
  }
}
