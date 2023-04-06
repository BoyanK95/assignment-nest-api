import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({
  tableName: 'products',
})
export class Products extends Model<Products> {
  @Column({
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    unique: true,
  })
  id: number;

  @Column
  name: string;

  @Column
  picture: string

  @Column({
    allowNull: false,
  })
  unit: string;

  @Column({
    allowNull: false,
  })
  quantity: number;

  @Column({
    allowNull: false,
  })
  hazardous: boolean;

  @Column
  description: string
}