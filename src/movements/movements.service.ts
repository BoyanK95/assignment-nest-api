import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Movements } from './movements.model';
import { CreateMovementDto } from 'src/auth/dtos/create-movement.dto';

@Injectable()
export class MovementsService {
    constructor(
        @InjectModel(Movements)
        private readonly movementsModel: typeof Movements,
      ) {}
    
      async findAll(): Promise<Movements[]> {
        return this.movementsModel.findAll();
      }
    
      async findOne(id: number): Promise<Movements> {
        return this.movementsModel.findByPk(id);
      }
    
      async create(movement: CreateMovementDto): Promise<Movements> {
        return this.movementsModel.create(movement);
      }
    
      async update(id: number, movement: Movements): Promise<number> {
        const [affectedCount] = await this.movementsModel.update(movement, {
          where: { id },
        });
        return affectedCount;
      }
    
      async delete(id: number): Promise<Movements> {
        const movement = await this.movementsModel.findByPk(id);
        await movement.destroy();
        return movement;
      }
    
}
