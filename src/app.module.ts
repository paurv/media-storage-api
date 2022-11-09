import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users/users.module';
import { VideosController } from './videos/videos.controller';
import { VideosModule } from './videos/videos/videos.module';
import { ImagesModule } from './images/images.module';

@Module({
  imports: [UsersModule, VideosModule, ImagesModule],
  controllers: [AppController, VideosController],
  providers: [AppService],
})
export class AppModule {}
