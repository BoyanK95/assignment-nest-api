import { Min } from 'class-validator';
import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Products } from 'src/products/products.model';
import { Warehouses } from 'src/warehouses/warehouses.model';

@Table({
  tableName: 'movements',
})
export class Movements extends Model<Movements> {
  @Column({
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    unique: true,
  })
  id: number;

  @Min(1)
  @Column
  count: number;

  @Column
  date: Date;

//   @ForeignKey(() => Warehouses)
//   @Column({
//     type: DataType.NUMBER,
//     references: {
//       model: Warehouses,
//       key: 'id',
//     },
//   })
//   exportedWarehouseId: number;

//   @ForeignKey(() => Warehouses)
//   @Column({
//     type: DataType.NUMBER,
//     references: {
//       model: Warehouses,
//       key: 'id',
//     },
//   })
//   importedWarehouseId: number;

//   @BelongsTo(() => Warehouses, 'importedWarehouseId')
//   importedWarehouse: Warehouses;

//   @ForeignKey(() => Products)
//   @Column({
//     type: DataType.NUMBER,
//     references: {
//       model: Products,
//       key: 'id',
//     },
//   })
//   productId: string;

//   @BelongsTo(() => Products)
//   product: Products;
}
