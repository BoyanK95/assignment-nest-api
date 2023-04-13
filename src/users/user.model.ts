import { Column, HasMany, Model, Table } from 'sequelize-typescript';
import { Products } from 'src/products/products.model';
import { Warehouses } from 'src/warehouses/warehouses.model';

@Table({
  tableName: 'users',
})
export class User extends Model<User> {
  @Column({
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    unique: true,
  })
  user_id: number;

  @Column
  name: string;

  @Column({
    allowNull: false,
    unique: true,
  })
  email: string;

  @Column({
    allowNull: false,
  })
  password: string;

  @Column({
    defaultValue: 'Read',
    values: ['Admin', 'Read', 'Write'],
  })
  rights: string;

/** This shoudl establish relations between tables, didn't try it out cause of absence of time and, because I donw want to bug SQL tables DB */
  // @HasMany(() => Products, 'user_id')
  // products: Products[];

  // @HasMany(() => Warehouses, 'user_id')
  // warehouses: Warehouses[];
}
