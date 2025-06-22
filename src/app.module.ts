import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EnvioCorreosModule } from './services/envio-correos/envio-correos.module';

@Module({
  imports: [EnvioCorreosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
