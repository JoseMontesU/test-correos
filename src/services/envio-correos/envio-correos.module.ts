import { Module } from '@nestjs/common';
import { EnvioCorreosService } from './service/envio-correos.service';
import { EnvioCorreosController } from './controller/envio-correos.controller';

@Module({
  controllers: [EnvioCorreosController],
  providers: [EnvioCorreosService],
})
export class EnvioCorreosModule {}
