import { NestFactory } from '@nestjs/core';
import { MessagesModule } from './messages.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { MESSAGES_PACKAGE_NAME } from 'proto/messages';

async function bootstrap() {
  const app = await NestFactory.create(MessagesModule);

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.GRPC,
    options: {
      package: MESSAGES_PACKAGE_NAME,
      protoPath: './proto/messages.proto',
      url: '127.0.0.1:3001',
    },
  });
  
  await app.startAllMicroservices();
  await app.listen(3001);
}
bootstrap();
