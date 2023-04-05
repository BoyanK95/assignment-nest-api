import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { Products } from './products.model';
import { ProductsService } from './products.service';

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
}