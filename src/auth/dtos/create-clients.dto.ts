import {
  IsEmail,
  isNotEmpty,
  IsNotEmpty,
  IsNumber,
  isNumber,
  isPhoneNumber,
  IsString,
  Length,
} from 'class-validator';

export class CreateClientDto {
  @IsString()
  @IsNotEmpty()
  @Length(1, 255)
  client_name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @IsString()
  country: string;

  @IsString()
  @Length(2, 2)
  countryCode: string;

  @IsString()
  @IsNotEmpty()
  address: string;

  @IsNotEmpty()
  @IsNumber()
  postal_code: number;

  @IsNumber()
  number_of_orders: number;

  // @isPhoneNumber() //for phone_number: string, to be realy precise
  @IsNotEmpty()
  @Length(9, 15)
  phone_number: number;

  @IsNotEmpty()
  city: string;
}
