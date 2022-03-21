import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

export type OcorrenciaDocument = Ocorrencia & Document;

@Schema()
export class Ocorrencia {

  @Prop({ type: MongooseSchema.Types.ObjectId })
  id: string;

  @Prop({ required: true })
  descricao: string;

  @Prop({ required: true })
  data: string;

  @Prop({ required: true })
  tipoOcorrencia: string;

  @Prop()
  numeroOcorrencia: string;

  @Prop({ required: true })
  latitude: number;

  @Prop({ required: true })
  longitude: number;
}

export const OcorrenciaSchema = SchemaFactory.createForClass(Ocorrencia);
