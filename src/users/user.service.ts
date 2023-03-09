import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';

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
}
