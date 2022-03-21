import { Module } from '@nestjs/common';
import { OcorrenciasService } from './ocorrencias.service';
import { OcorrenciasController } from './ocorrencias.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Ocorrencia, OcorrenciaSchema } from './schemas/ocorrencia.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Ocorrencia.name, schema: OcorrenciaSchema }])],
  providers: [OcorrenciasService],
  controllers: [OcorrenciasController]
})
export class OcorrenciasModule {}
