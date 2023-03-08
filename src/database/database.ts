import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { credentials } from './credentials';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: credentials.user,
      host: credentials.host,
      username: credentials.user,
      password: credentials.password,
      autoLoadModels: true,
    }),
  ],
})
export class AppModule {}
