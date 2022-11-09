import { User } from 'src/users/user.entity';
import { Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

export class Videos {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  type: string;

  @Column()
  videoFile: any;

  @Column()
  createdAt: number;

  @ManyToOne(() => User, (user) => user.videoFile)
  user: User;
}
