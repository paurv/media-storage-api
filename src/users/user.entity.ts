import { Image } from 'src/images/image.entity';
import { Videos } from 'src/videos/videos.entity';
import { Column, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { UserRoles } from './userRoles.entity';

export class User {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany(
    () => UserRoles,
    (userRole) => {
      userRole.user;
    },
  )
  role: UserRoles;

  @OneToMany(() => Videos, (video) => video.user)
  videoFile: Videos;

  @OneToMany(() => Image, (image) => image.user)
  image: Image;
}
