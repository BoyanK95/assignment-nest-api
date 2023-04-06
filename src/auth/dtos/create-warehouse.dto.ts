import { IsBoolean, IsNotEmpty, IsNumber, IsString } from "class-validator";


export class CreateWarehouseDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    location: string

    @IsNotEmpty()
    @IsNumber()
    storage: number

    @IsBoolean()
    @IsNotEmpty()
    hazardous: boolean
}