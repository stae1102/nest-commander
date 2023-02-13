import { CreateDateColumn, DeleteDateColumn, UpdateDateColumn } from 'typeorm';

export abstract class BaseTimeEntity {
  @CreateDateColumn({ type: 'timestamptz', default: new Date() })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz', default: new Date() })
  updatedAt: Date;

  @DeleteDateColumn({ type: 'timestamptz', nullable: true })
  deletedAt?: Date;
}
