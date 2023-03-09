import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './products/product.module';
import { ClientsController } from './clients/clients.controller';
import { ClientsModule } from './clients/clients.module';
import { ClientsService } from './clients/clients.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { credentials } from './database/credentials';
import { Client } from './clients/clients.model';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: credentials.host,
      port: credentials.port,
      username: credentials.user,
      password: credentials.password,
      autoLoadModels: true,
      synchronize: true,
      models: [Client],
    }),
    ClientsModule
  ],
  controllers: [AppController, ClientsController],
  providers: [AppService, ClientsService],
})
export class AppModule {}
