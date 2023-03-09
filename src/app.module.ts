import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsController } from './clients/clients.controller';
import { ClientsModule } from './clients/clients.module';
import { ClientsService } from './clients/clients.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { credentials } from './database/credentials';
import { Client } from './clients/clients.model';
import { User } from './users/user.model';
import { UserModule } from './users/user.module';
import { Product } from './products/product.model';
import { ProductModule } from './products/product.module';

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
      models: [Client, User],
    }),
    ClientsModule,
    UserModule,
    // ProductModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
      consumer
        .apply()
        .forRoutes('users')
  }
}
