import { Body, Controller, Inject, OnModuleInit, Post } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { MessagesServiceClient, MESSAGES_SERVICE_NAME, TransmitMessageResponse, TransmitMessageRequest } from 'proto/messages';
import { Observable } from 'rxjs';

@Controller('/api/v1')
export class MessagesController implements OnModuleInit {
  private messagesServiceClient: MessagesServiceClient;

  @Inject(MESSAGES_SERVICE_NAME)
  private readonly client: ClientGrpc;

  public onModuleInit(): void {
    this.messagesServiceClient = this.client.getService<MessagesServiceClient>(MESSAGES_SERVICE_NAME);
  }

  @Post('/messages/transmit')
  async transmitMessage(@Body() transmitMessageRequest: TransmitMessageRequest): Promise<Observable<TransmitMessageResponse>> {
    return this.messagesServiceClient.transmitMessage(transmitMessageRequest);
  }
}