import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { credentials } from 'src/database/credentials';
import { ClientsController } from './clients.controller';
import { Client } from './clients.model';
import { ClientsService } from './clients.service';

@Module({
  imports: [SequelizeModule.forFeature([Client])],
  controllers: [ClientsController],
  providers: [ClientsService],
  exports: [ClientsModule]
})
export class ClientsModule {}
