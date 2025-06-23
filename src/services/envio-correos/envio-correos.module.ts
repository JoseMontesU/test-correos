import { Module } from '@nestjs/common';
import { EnvioCorreosService } from './service/envio-correos.service';
import { EnvioCorreosController } from './controller/envio-correos.controller';
import { CorreoRepository } from './repository/correo.repository';
import { CorreosEntity } from './entity/correo.entity';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [TypeOrmModule.forFeature([CorreosEntity])],
  controllers: [EnvioCorreosController],
  providers: [EnvioCorreosService, CorreoRepository],
  
})
export class EnvioCorreosModule {}
