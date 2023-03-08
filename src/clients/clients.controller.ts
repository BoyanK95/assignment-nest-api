import { Body, Controller, Get, Param, Post } from '@nestjs/common';
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
  findOne(@Param('id') id: string): Promise<Client> {
    return this.clientsService.findOne(id);
  }

  @Post()
  create(@Body() createClientDto: any): Promise<Client> {
    return this.clientsService.create(createClientDto);
  }
}
