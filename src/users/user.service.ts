import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';
import { CreateUserDto } from 'src/auth/dtos/create-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User)
    private readonly userModel: typeof User,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userModel.findAll();
  }

  async findOne(id: number): Promise<User> {
    return this.userModel.findByPk(id);
  }

  async findOneByEmail(email: string): Promise<User> {
    return this.userModel.findOne({ where: { email: email } });
    // if (!user) {
    //   throw new NotFoundException('There is no user with this email');
    // }
    // return user;
  }

  async create(user: any): Promise<User> {
    return this.userModel.create(user);
  }

  async update(id: number, user: User): Promise<number> {
    const [affectedCount] = await this.userModel.update(user, {
      where: { user_id: id },
    });
    return affectedCount;
  }

  async delete(id: number): Promise<User> {
    const user = await this.userModel.findByPk(id);
    await user.destroy();
    return user;
  }

  // loginAsync = async (dto: CreateUserDto): Promise<User> => {
  //   const user = await this.userModel.findOne({
  //     where: { email: dto.email },
  //   });
  //   if (!user) throw new ForbiddenException('Email incorrect');

  //   const correctPassword = await verifyPasswordAsync(
  //     dto.password,
  //     user.password,
  //   );
  //   if (!correctPassword) throw new ForbiddenException('Password incorrect');
  //   return this.signTokenAsync(user.id);
  // };

  // private signTokenAsync = async (id: string): Promise<User> => {
  //   const payload = {
  //     id: id,
  //   };
  //   const secret = this.config.get('JWT_SECRET');

  //   const token = await this.jwt.signAsync(payload, {
  //     expiresIn: '120m',
  //     secret: secret,
  //   });

  //   return { token: token };
  // };
}
