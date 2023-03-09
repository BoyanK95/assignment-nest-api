import { Column, Model, Table } from 'sequelize-typescript';

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
    allowNull: false,
    defaultValue: 'Read',
    values: ['Admin', 'Read', 'Write'],
  })
  rights: string;
}
