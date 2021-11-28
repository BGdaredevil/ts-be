import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Credit_Status {
  @PrimaryGeneratedColumn({ type: 'smallint' })
  id;

  @Column({ type: 'varchar', length: 32, nullable: false })
  name;

  @Column({ type: 'varchar', length: 32, nullable: true, default: null })
  reason;
}
