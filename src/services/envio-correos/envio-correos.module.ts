import { Module } from '@nestjs/common';
import { EnvioCorreosService } from './service/envio-correos.service';
import { EnvioCorreosController } from './controller/envio-correos.controller';
import { CorreoRepository } from './repository/correo.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Correos } from './entity/correo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Correos])],
  controllers: [EnvioCorreosController],
  providers: [EnvioCorreosService, CorreoRepository],
})
export class EnvioCorreosModule {}
