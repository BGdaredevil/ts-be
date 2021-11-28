import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Credit } from './credit/credit.entity';
import { CreditModule } from './credit/credit.module';
import { Credit_Status } from './credit/credit_status.entity';
import { Installment } from './credit/installment.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '9010031448aA!',
      database: 'test',
      entities: [Credit, Credit_Status, Installment],
      synchronize: true,
      autoLoadEntities: true,
    }),
    CreditModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
