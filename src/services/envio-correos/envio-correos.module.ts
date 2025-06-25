import { Module } from '@nestjs/common';
import { EnvioCorreosService } from './service/envio-correos.service';
import { EnvioCorreosController } from './controller/envio-correos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CorreosEntity } from './entity/correo.entity';
import { CorreoRepository } from './repository/correo.repository';


@Module({
  imports: [TypeOrmModule.forFeature([CorreosEntity])], 
  controllers: [EnvioCorreosController],
  providers: [EnvioCorreosService, CorreoRepository ],
})
export class EnvioCorreosModule {}
