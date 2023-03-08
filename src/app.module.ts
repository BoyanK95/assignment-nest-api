import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './products/product.module';
import { ClientsController } from './clients/clients.controller';
import { ClientsModule } from './clients/clients.module';

@Module({
  imports: [ProductModule, ClientsModule],
  controllers: [AppController, ClientsController],
  providers: [AppService],
})
export class AppModule {}
