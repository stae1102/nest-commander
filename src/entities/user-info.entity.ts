import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { CommonEntity } from './common.entity';
import { User } from './user.entity';

@Entity('user_info')
export class UserInfo extends CommonEntity {
  @OneToOne(() => User, (user) => user.UserInfo)
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  User: User;

  @Column({ type: 'uuid', name: 'user_id' })
  UserId?: string;

  @Column({ type: 'tinyint', unsigned: true, nullable: true })
  height?: number;

  @Column({ type: 'tinyint', unsigned: true, nullable: true })
  weight?: number;

  @Column({ type: 'tinyint', unsigned: true, nullable: true })
  age?: number;
}
