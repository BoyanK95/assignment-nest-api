import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserController } from './user.controller';
import { User } from './user.model';
import { UserService } from './user.service';
import { usersProviders } from './user.provider';


@Module({
  imports: [SequelizeModule.forFeature([User])],
  controllers: [UserController],
  providers: [UserService, ...usersProviders],
  exports: [UserService],
})
export class UserModule {}
