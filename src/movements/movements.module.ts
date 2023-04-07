import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Movements } from './movements.model';
import { MovementsController } from './movements.controller';
import { MovementsService } from './movements.service';

@Module({
  imports: [SequelizeModule.forFeature([Movements])],
  controllers: [MovementsController],
  providers: [MovementsService],
  exports: [MovementsModule],
})
export class MovementsModule {}
