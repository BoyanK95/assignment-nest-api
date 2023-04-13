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
