import { Module } from '@nestjs/common';
import { ApiGatewayController } from './controller/api-gateway.controller';
import { ApiGatewayService } from './service/api-gateway.service';

@Module({
  imports: [],
  controllers: [ApiGatewayController],
  providers: [ApiGatewayService],
})
export class ApiGatewayModule {}
