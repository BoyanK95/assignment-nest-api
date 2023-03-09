import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
  Length,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  @IsString()
  email: string;

  /** If you realy want to go hard-core */
  //   @IsStrongPassword()
  @Length(5, 20)
  @IsString()
  @IsNotEmpty()
  password: string;
}
