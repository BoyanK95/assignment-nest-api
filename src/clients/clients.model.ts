import { Model } from 'sequelize';
import { Column, DataType, Table } from 'sequelize-typescript';

@Table({ tableName: 'client' })
export class Client extends Model {
  @Column({ primaryKey: true, autoIncrement: true })
  client_id: number;

  @Column(DataType.STRING)
  client_name: string;

  @Column(DataType.STRING)
  email: string;

  @Column(DataType.STRING)
  country: string;

  @Column(DataType.STRING(2))
  countryCode: string;

  @Column(DataType.STRING)
  address: string;

  @Column(DataType.SMALLINT)
  postal_code: number;

  @Column(DataType.INTEGER)
  number_of_orders: number;

  @Column(DataType.INTEGER)
  phone_number: number;

  @Column(DataType.STRING)
  city: string;
}
