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
import { ProductsModule } from './products/products.module';
import { WarehousesController } from './warehouses/warehouses.controller';
import { WarehousesService } from './warehouses/warehouses.service';
import { WarehousesModule } from './warehouses/warehouses.module';
import { Products } from './products/products.model';
import { Warehouses } from './warehouses/warehouses.model';
import { MovementsController } from './movements/movements.controller';
import { MovementsService } from './movements/movements.service';
import { MovementsModule } from './movements/movements.module';
import { CorsMiddleware } from './middlewares/cors.middleware';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: credentials.host,
      port: credentials.port,
      username: credentials.user,
      password: credentials.password,
      autoLoadModels: true,
      synchronize: true,
      models: [User, Products, Warehouses],
    }),
    UserModule,
    AuthModule,
    ProductsModule,
    WarehousesModule,
    MovementsModule,
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CorsMiddleware).forRoutes('*');
  }
}
