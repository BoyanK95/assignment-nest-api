import { Injectable } from '@nestjs/common';
import { UserService } from 'src/users/user.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UserService) {}

  async validateUser(id: number,username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(id);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}
