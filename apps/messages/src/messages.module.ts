import { Module } from '@nestjs/common';
import { MessagesController } from './controller/messages.controller';
import { MessagesService } from './service/messages.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { MESSAGES_PACKAGE_NAME, MESSAGES_SERVICE_NAME } from '../../../proto/messages';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: MESSAGES_SERVICE_NAME,
        transport: Transport.GRPC,
        options: {
          url: '127.0.0.1:3001',
          package: MESSAGES_PACKAGE_NAME,
          protoPath: './proto/messages.proto',
        },
      },
    ]),
  ],
  controllers: [MessagesController],
  providers: [MessagesService],
})
export class MessagesModule {}
