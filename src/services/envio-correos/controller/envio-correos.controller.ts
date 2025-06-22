import { Controller } from '@nestjs/common';
import { EnvioCorreosService } from '../service/envio-correos.service';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class EnvioCorreosController {
  constructor(private readonly envioCorreosService: EnvioCorreosService) {}

  @MessagePattern('ENVIAR_CORREO')
  async enviarCorreo(
    @Payload() payload: { asunto: string; mensaje: string; estado: string }
  ): Promise<any> {
    const { asunto, mensaje, estado } = payload;
    return this.envioCorreosService.enviarCorreo(asunto, mensaje, estado);
  }

}
