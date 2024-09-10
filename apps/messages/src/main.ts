import { NestFactory } from '@nestjs/core';
import { MessagesModule } from './messages.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { MESSAGES_PACKAGE_NAME } from 'proto/messages';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    MessagesModule,
    {
      transport: Transport.GRPC,
      options: {
        url: `${process.env.GRPC_MS_MESSAGES_HOST}:${process.env.GRPC_MS_MESSAGES_PORT}`,
        package: MESSAGES_PACKAGE_NAME,
        protoPath: join(__dirname, '../../../proto/messages.proto'),
      },
    },
  );

  await app.listen();
  console.log(
    `MESSAGES gRPC URL: ${process.env.GRPC_MS_MESSAGES_HOST}:${process.env.GRPC_MS_MESSAGES_PORT}`,
  );
}
bootstrap();
