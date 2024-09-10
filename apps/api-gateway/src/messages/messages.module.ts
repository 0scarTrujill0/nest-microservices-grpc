import { Module } from '@nestjs/common';
import { MessagesController } from './controller/messages.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { MESSAGES_PACKAGE_NAME, MESSAGES_SERVICE_NAME } from 'proto/messages';
import { join } from 'path';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: MESSAGES_SERVICE_NAME,
        transport: Transport.GRPC,
        options: {
          url: `${process.env.GRPC_MS_MESSAGES_HOST}:${process.env.GRPC_MS_MESSAGES_PORT}`,
          package: MESSAGES_PACKAGE_NAME,
          protoPath: join(__dirname, '../../../proto/messages.proto'),
        },
      },
    ]),
  ],
  controllers: [MessagesController],
  providers: [],
})
export class MessagesModule {}
