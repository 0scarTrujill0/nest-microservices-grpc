import { Controller, Inject } from '@nestjs/common';
import { MessagesServiceControllerMethods, TransmitMessageRequest, TransmitMessageResponse } from 'proto/messages';
import { MessagesService } from '../service/messages.service';

@Controller()
@MessagesServiceControllerMethods()
export class MessagesController {
  @Inject(MessagesService)
  private readonly messagesService: MessagesService;

  async transmitMessage(body: TransmitMessageRequest): Promise<TransmitMessageResponse> {
    return this.messagesService.transmitMessage(body);
  }
}
