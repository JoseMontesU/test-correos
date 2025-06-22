import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport} from '@nestjs/microservices';
import { AppModule } from './app.module';
import { LogLevel } from '@nestjs/common';

async function bootstrap() {
 const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://localhost:5672'],
        queue: 'Correos',
      },
      logger: ['error', 'verbose'],
    },
  );
  const logLevels: LogLevel[] = ['log', 'error', 'warn', 'debug', 'verbose'];
  app.useLogger(logLevels);
  await app.listen();
}
bootstrap();
