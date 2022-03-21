import {
    IsNotEmpty,
    IsNumber,
    IsOptional,
    IsString,
  } from 'class-validator';

export class CreateOcorrenciaDto {
    @IsString()
    @IsNotEmpty()
    descricao: string;
    
    @IsString()
    @IsNotEmpty()
    data: string;
    
    @IsString()
    @IsNotEmpty()
    tipoOcorrencia: string;
    
    @IsString()
    @IsOptional()
    numeroOcorrencia: string;
    
    @IsNumber()
    @IsNotEmpty()
    latitude: number;
    
    @IsNumber()
    @IsNotEmpty()
    longitude: number;
}
  