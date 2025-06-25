import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EnvioCorreosModule } from './services/envio-correos/envio-correos.module';
import { DatabaseModule } from './helper/database.conexion';

@Module({
  imports: [
    EnvioCorreosModule,
    DatabaseModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
