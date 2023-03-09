import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Client } from './clients.model';

@Injectable()
export class ClientsService {
  constructor(
    @InjectModel(Client) private readonly clientModel: typeof Client,
  ) {}

  findAll(): Promise<Client[]> {
    return this.clientModel.findAll();
  }

  findOne(id: number): Promise<Client> {
    return this.clientModel.findByPk(id);
  }

  create(client: any): Promise<Client> {
    return this.clientModel.create(client);
  }

  async delete(id: number): Promise<Client> {
    const client = await this.clientModel.findByPk(id);
    await client.destroy();
    return client;
  }
}
