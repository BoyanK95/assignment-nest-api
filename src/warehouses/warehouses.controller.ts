import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { WarehousesService } from './warehouses.service';
import { Warehouses } from './warehouses.model';
import { CreateWarehouseDto } from 'src/auth/dtos/create-warehouse.dto';

@Controller('warehouses')
export class WarehousesController {
  constructor(private readonly warehousesService: WarehousesService) {}

  @Get()
  findAll(): Promise<Warehouses[]> {
    return this.warehousesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Warehouses> {
    const warehouse = await this.warehousesService.findOne(id);

    if (!warehouse) {
      throw new NotFoundException('Warehouse Not Found!');
    }

    return warehouse;
  }

  @Post()
  createWarehouse(
    @Body() createWarehouseDto: CreateWarehouseDto,
  ): Promise<Warehouses> {
    return this.warehousesService.create(createWarehouseDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() body: any,
  ): Promise<number> {
    const warehouse = await this.warehousesService.findOne(id);

    if (!warehouse) {
      throw new NotFoundException('Warehouse Not Found!');
    }

    return this.warehousesService.update(id, body);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<Warehouses> {
    const warehouse = await this.warehousesService.findOne(id);

    if (!warehouse) {
      throw new NotFoundException('Warehouse Not Found!');
    }
    return this.warehousesService.delete(id);
  }
}
