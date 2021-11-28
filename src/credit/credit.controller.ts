import { Controller, Dependencies, Get, Post, Bind, Req } from '@nestjs/common';
import { CreditService } from './credit.service';

@Controller('credit')
export class CreditController {
  creditService;
  constructor(creditService: CreditService) {
    this.creditService = creditService;
  }

  @Get()
  defaultGet() {
    return this.creditService.anounce();
  }

  @Post()
  @Bind(Req())
  async defaultPost(req) {
    const { user, amount, duration } = req.body;
    let tt = await this.creditService.postCreditResult(user, amount, duration);
    return { desicion: tt };
  }
}
