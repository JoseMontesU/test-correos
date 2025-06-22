import { Test, TestingModule } from '@nestjs/testing';
import { EnvioCorreosController } from './controller/envio-correos.controller';
import { EnvioCorreosService } from './service/envio-correos.service';

describe('EnvioCorreosController', () => {
  let controller: EnvioCorreosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EnvioCorreosController],
      providers: [EnvioCorreosService],
    }).compile();

    controller = module.get<EnvioCorreosController>(EnvioCorreosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
