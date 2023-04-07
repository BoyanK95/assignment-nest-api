import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Products } from './products.model';
import { CreateProductDto } from 'src/auth/dtos/create-product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Products)
    private readonly productsModel: typeof Products,
  ) {}

  async findAll(): Promise<Products[]> {
    return this.productsModel.findAll();
  }

  async findOne(id: number): Promise<Products> {
    return this.productsModel.findByPk(id);
  }

  async create(product: CreateProductDto): Promise<Products> {
    return this.productsModel.create(product);
  }

  async update(id: number, product: Products): Promise<number> {
    const [affectedCount] = await this.productsModel.update(product, {
      where: { id: id },
    });
    return affectedCount;
  }

  async delete(id: number): Promise<Products> {
    const product = await this.productsModel.findByPk(id);
    await product.destroy();
    return product;
  }
}
