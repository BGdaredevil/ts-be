import { Injectable, Dependencies } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';

import { Credit } from './credit.entity.js';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Credit_Status } from './credit_status.entity.js';
import { Installment } from './installment.entity.js';

@Injectable()
@Dependencies(getRepositoryToken(Credit))
export class CreditService {
  @InjectRepository(Credit)
  creditRepository: Repository<Credit>;

  @InjectRepository(Credit_Status)
  creditStatusRepository: Repository<Credit_Status>;

  @InjectRepository(Installment)
  installmentRepository: Repository<Installment>;

  anounce() {
    return { message: 'Hello I am a credit API. Do you need some cash?' };
  }

  getDataFromDB() {
    return 'pesho is fetching from the db';
  }

  async postCreditResult(user, amount, duration) {
    let contracts = await this.creditRepository.find({
      where: { user_id: user },
      order: { id: 'DESC' },
    });
    let statistics = undefined;

    if (contracts.length > 0) {
      statistics = contracts.reduce((a, e) => {
        a.hasOwnProperty(e.credit_status_id)
          ? (a[e.credit_status_id] += 1)
          : (a[e.credit_status_id] = 1);
        return a;
      }, {});
    }

    if (!statistics) {
      return 0;
    }

    let decodedStatus = await this.creditStatusRepository.find({
      id: In(Object.keys(statistics)),
    });

    statistics = decodedStatus.reduce((a, e) => {
      a.hasOwnProperty(e.name) ? (a[e.name] += a[e.id]) : (a[e.name] = a[e.id]);
      return a;
    }, statistics);

    let verdict = Object.entries(statistics).filter((e) => e[0].length > 2);
    let anotherVariableBecauseTS = { all: 0, good: 0 };
    verdict.map((e) => {
      const [code, count] = e;

      anotherVariableBecauseTS.all += Number(count);
      if (
        ['NEW', 'APPROVED', 'CONFIRMED', 'REGULAR', 'REPAID'].includes(
          code.toUpperCase(),
        )
      ) {
        anotherVariableBecauseTS.good += Number(count);
      }
    });

    if (anotherVariableBecauseTS.good / anotherVariableBecauseTS.all > 0.7) {
      return 1;
    }
    if (anotherVariableBecauseTS.good / anotherVariableBecauseTS.all > 0.5) {
      return 0;
    }
    return -1;
  }
}
