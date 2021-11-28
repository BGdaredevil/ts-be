import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Installment {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id;

  @Column({ type: 'decimal', precision: 19, scale: 2, nullable: false }) //----------------------------------------------------------------
  forfeit;

  @Column({ type: 'date', nullable: false })
  maturity_date;

  @Column({ type: 'decimal', precision: 19, scale: 2, nullable: false }) //----------------------------------------------------------------
  interest;

  @Column({ type: 'smallint', nullable: false })
  number;

  @Column({ type: 'datetime', nullable: true })
  payment_date;

  @Column({ type: 'decimal', precision: 19, scale: 2, nullable: false }) //----------------------------------------------------------------
  principal;

  @Column({ type: 'bigint', nullable: false })
  credit_id;
}
