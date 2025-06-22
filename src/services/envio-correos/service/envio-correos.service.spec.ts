import { Test, TestingModule } from '@nestjs/testing';
import { EnvioCorreosService } from './service/envio-correos.service';

describe('EnvioCorreosService', () => {
  let service: EnvioCorreosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EnvioCorreosService],
    }).compile();

    service = module.get<EnvioCorreosService>(EnvioCorreosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
