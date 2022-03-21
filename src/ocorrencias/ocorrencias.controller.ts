import { Body, Controller, Get, Post, ValidationPipe } from '@nestjs/common';
import { CreateOcorrenciaDto } from './dto/createOcorrenciaDto';
import { OcorrenciasService } from './ocorrencias.service';

@Controller('ocorrencias')
export class OcorrenciasController {
    constructor(private ocorrenciaService: OcorrenciasService) {}

    @Get()
    find() {
        return this.ocorrenciaService.findAll();
    }
    
    @Post()
    create(@Body(new ValidationPipe()) ocorrenciaDto: CreateOcorrenciaDto) {
        return this.ocorrenciaService.create(ocorrenciaDto);
    } 
}
