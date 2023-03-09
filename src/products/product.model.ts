import { Column, DataType, Table, Model } from 'sequelize-typescript';

@Table({ tableName: 'products' })
export class Product extends Model {
  @Column({ primaryKey: true, autoIncrement: true, unique: true })
  id: number;

  @Column(DataType.STRING)
  name: string;

  @Column(DataType.NUMBER)
  price: number;

  @Column(DataType.NUMBER)
  qty_sold: number;

  @Column(DataType.NUMBER)
  qty_in_storage: number;

  @Column(DataType.STRING)
  description: string;
}
