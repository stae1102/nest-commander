import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { BaseTimeEntity } from './base-time.entity';
import { UserInfo } from './user-info.entity';

@Entity('user')
export class User extends BaseTimeEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 20 })
  nickname: string;

  @Column({ type: 'varchar', length: 100 })
  email: string;

  @Column({ type: 'text' })
  password: string;

  @OneToOne(() => UserInfo, (userInfo) => userInfo.User)
  UserInfo: UserInfo;
}
