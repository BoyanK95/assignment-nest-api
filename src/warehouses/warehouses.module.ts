import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Warehouses } from './warehouses.model';
import { WarehousesController } from './warehouses.controller';
import { WarehousesService } from './warehouses.service';

@Module({
  imports: [SequelizeModule.forFeature([Warehouses])],
  controllers: [WarehousesController],
  providers: [WarehousesService],
  exports: [WarehousesModule],
})
export class WarehousesModule {}
