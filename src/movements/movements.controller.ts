import {
  Controller,
  Body,
  Get,
  Post,
  Delete,
  NotFoundException,
  Param,
} from '@nestjs/common';
import { MovementsService } from './movements.service';
import { Movements } from './movements.model';
import { CreateMovementDto } from 'src/auth/dtos/create-movement.dto';

@Controller('movements')
export class MovementsController {
  constructor(private readonly movementsService: MovementsService) {}

  @Get()
  findAll(): Promise<Movements[]> {
    return this.movementsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Movements> {
    const movement = await this.movementsService.findOne(id);

    if (!movement) {
      throw new NotFoundException('There is no such import or export!');
    }

    return movement;
  }

  @Post()
  createUser(
    @Body() createMovementDto: CreateMovementDto,
  ): Promise<Movements> {
    return this.movementsService.create(createMovementDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<Movements> {
    const movement = await this.movementsService.findOne(id);

    if (!movement) {
      throw new NotFoundException('Warehouse Not Found!');
    }
    return this.movementsService.delete(id);
  }
}
