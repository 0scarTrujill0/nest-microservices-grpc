import { Injectable } from '@nestjs/common';
import { TransmitMessageRequest, TransmitMessageResponse } from 'proto/messages';

@Injectable()
export class MessagesService {
  transmitMessage(request: TransmitMessageRequest): TransmitMessageResponse {
    if (request.id === 1) {
      return {
        status: 200,
        error: [],
        message: request.message,
        id: request.id,
      };
    }

    return {
      status: 400,
      error: ['El ID no se reconoce, mensaje no transmitido.'],
      message: request.message,
      id: request.id,
    };
  }
}
