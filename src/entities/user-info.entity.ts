import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { User } from './user.entity';

@Entity('user_info')
export class UserInfo {
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
