import { IsBoolean, IsNotEmpty, IsNumber, IsString } from "class-validator";


export class CreateProductDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    unit: string

    @IsNotEmpty()
    @IsNumber()
    quantity: number

    @IsBoolean()
    @IsNotEmpty()
    hazardous: boolean
}