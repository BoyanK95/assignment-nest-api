import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from 'sequelize-typescript';
import { Movements } from 'src/movements/movements.model';
import { User } from 'src/users/user.model';

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
  
/** This shoudl establish relations between tables, didn't try it out cause of absence of time and, because I donw want to bug SQL tables DB */
  // @ForeignKey(() => User)
  // @Column({
  //   type: DataType.NUMBER,
  //   references: {
  //     model: User,
  //     key: 'id',
  //   },
  // })
  // user_id: number;

  // @BelongsTo(() => User)
  // user: User;

  // @HasMany(() => Movements, 'exportedWarehouseId')
  // exportedMovements: Movements;

  // @HasMany(() => Movements, 'importedWarehouseId')
  // importedMovements: Movements;
}
