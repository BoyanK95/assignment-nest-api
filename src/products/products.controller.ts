import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { Products } from './products.model';
import { ProductsService } from './products.service';
import { CreateProductDto } from 'src/auth/dtos/create-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  findAll(): Promise<Products[]> {
    return this.productsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Products> {
    const product = await this.productsService.findOne(id);

    if (!product) {
      throw new NotFoundException('Product Not Found!');
    }

    return product;
  }

  @Post()
  createProduct(@Body() createProductDto: CreateProductDto): Promise<Products> {
    return this.productsService.create(createProductDto);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Promise<Products> {
    return this.productsService.delete(id);
  }
}
