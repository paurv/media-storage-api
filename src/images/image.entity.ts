import { User } from 'src/users/user.entity';
import { Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

export class Image {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  createdAt: number;

  @Column()
  commentary: string;

  @ManyToOne(() => User, (user) => user.image)
  user: User;
}
