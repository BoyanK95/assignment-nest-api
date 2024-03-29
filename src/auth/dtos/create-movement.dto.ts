import { IsBoolean, IsNotEmpty, IsNumber, IsString } from "class-validator";


export class CreateMovementDto {
    @IsNotEmpty()
    count: number;
}