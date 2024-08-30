import { Type } from "class-transformer";
import { IsNumber, IsOptional, IsString } from "class-validator";

export class CreateProductDto {

    // Comporbar las validaciones con Form URL Encoded

    @IsString()
    name: string;

    @IsString()
    @IsOptional()
    description: string;

    @IsNumber()
    @Type( () => Number) // Intentará transformar todo lo que se mande a un número
    price: number;
}
