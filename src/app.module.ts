import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OcorrenciasModule } from './ocorrencias/ocorrencias.module';

@Module({
  imports: [
    ConfigModule.forRoot({ 
      isGlobal: true,
    }),
    MongooseModule.forRoot(`mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@cluster0.zxnof.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`),
    OcorrenciasModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
