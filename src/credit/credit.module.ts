import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreditController } from './credit.controller.js';

import { Credit } from './credit.entity.js';
import { CreditService } from './credit.service.js';
import { Credit_Status } from './credit_status.entity.js';
import { Installment } from './installment.entity.js';

@Module({
  imports: [TypeOrmModule.forFeature([Credit, Credit_Status, Installment])],
  exports: [TypeOrmModule],
  providers: [CreditService],
  controllers: [CreditController],
})
export class CreditModule {}
