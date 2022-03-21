import { Injectable } from '@nestjs/common';
import { Ocorrencia, OcorrenciaDocument } from './schemas/ocorrencia.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateOcorrenciaDto } from './dto/createOcorrenciaDto';

@Injectable()
export class OcorrenciasService {
    constructor(@InjectModel(Ocorrencia.name) private ocorrenciaModel: Model<OcorrenciaDocument>) {}

    async create(createOcorrenciaDto: CreateOcorrenciaDto): Promise<Ocorrencia> {
        const createdOcorrencia = new this.ocorrenciaModel(createOcorrenciaDto);
        return createdOcorrencia.save();
    }

    async findAll(): Promise<Ocorrencia[]> {
        return this.ocorrenciaModel.find().exec();
    }
}
