import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Credit {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id;

  @Column({ type: 'datetime', default: null, nullable: true })
  contract_time;

  @Column({ type: 'datetime', default: null })
  create_time;

  @Column({ type: 'varchar', default: null, length: 255 })
  discount_code;

  @Column({ type: 'date', default: null })
  due_date;

  @Column({ type: 'bit' })
  forfeit_accruals_enabled;

  @Column({ type: 'decimal', precision: 10, scale: 7 }) //----------------------------------------------------------------
  installment_days;

  @Column({ type: 'smallint' })
  installments_number;

  @Column({ type: 'decimal', precision: 19, scale: 2 }) //----------------------------------------------------------------
  principal;

  @Column({ type: 'datetime', default: null })
  utilization_time;

  @Column({ type: 'smallint' })
  credit_status_id;

  @Column({ type: 'bigint', default: null })
  operator_id;

  @Column({ type: 'bigint' })
  product_id;

  @Column({ type: 'bigint' })
  user_id;

  @Column({ type: 'date', default: null })
  repayment_date;
}
