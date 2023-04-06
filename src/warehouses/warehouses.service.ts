import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Warehouses } from './warehouses.model';

@Injectable()
export class WarehousesService {
    constructor(
        @InjectModel(Warehouses)
        private readonly warehousesModel: typeof Warehouses,
      ) {}
    
      async findAll(): Promise<Warehouses[]> {
        return this.warehousesModel.findAll();
      }
    
      async findOne(id: number): Promise<Warehouses> {
        return this.warehousesModel.findByPk(id);
      }
    
      async create(warehouse: any): Promise<Warehouses> {
        return this.warehousesModel.create(warehouse);
      }
    
      async update(id: number, warehouse: Warehouses): Promise<number> {
        const [affectedCount] = await this.warehousesModel.update(warehouse, {
          where: { id: id },
        });
        return affectedCount;
      }
    
      async delete(id: number): Promise<Warehouses> {
        const warehouse = await this.warehousesModel.findByPk(id);
        await warehouse.destroy();
        return warehouse;
      }
}
