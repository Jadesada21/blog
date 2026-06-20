import { Module } from '@nestjs/common';
import { BlogService } from './blog.service';
import { BlogController } from './blog.controller';
import { PrismaService } from '../prisma/prisma.service';
import { CloudinaryModule } from '../cloudinary/cloudinary.module';

@Module({
  imports: [CloudinaryModule],
  controllers: [BlogController],
  providers: [BlogService, PrismaService],
})
export class BlogModule { }
