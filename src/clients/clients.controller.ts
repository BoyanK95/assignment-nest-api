import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { CreateClientDto } from 'src/auth/dtos/create-clients.dto';
import { Client } from './clients.model';
import { ClientsService } from './clients.service';

@Controller('clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @Get()
  findAll(): Promise<Client[]> {
    return this.clientsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Client> {
    const client = this.clientsService.findOne(id);

    if (!client) {
      throw new NotFoundException('Client Not Found!');
    }

    return client;
  }

  @Post()
  create(@Body() createClientDto: CreateClientDto): Promise<Client> {
    return this.clientsService.create(createClientDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<Client> {
    return this.clientsService.delete(id);
  }
}
