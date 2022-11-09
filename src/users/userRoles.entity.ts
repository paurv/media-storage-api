import { Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';

export class UserRoles {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  role: 'FULL_ACCESS' | 'VIDEO_ACCESS' | 'COMMENT_ACCESS';

  @ManyToOne(() => User, (user) => user.role)
  user: User;
}
