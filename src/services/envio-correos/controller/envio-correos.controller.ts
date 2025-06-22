import { Controller } from '@nestjs/common';
import { EnvioCorreosService } from '../service/envio-correos.service';

@Controller()
export class EnvioCorreosController {
  constructor(private readonly envioCorreosService: EnvioCorreosService) {}
}
