import { Module } from '@nestjs/common';
import { BlogImageController } from './blog-image.controller';
import { CloudinaryModule } from '../cloudinary/cloudinary.module';
import { BlogImageService } from './blog-image.service';

@Module({
  imports: [CloudinaryModule],
  controllers: [BlogImageController],
  providers: [BlogImageService]
})
export class BlogImageModule { }
