import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({
  tableName: 'warehouses',
})
export class Warehouses extends Model<Warehouses> {
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
  location: string;

  @Column({
    allowNull: false,
  })
  storage: number;

  @Column({
    allowNull: false,
  })
  hazardous: boolean;

  @Column
  description: string
}
