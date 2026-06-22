import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { AdminModule } from './admin/admin.module';
import { ConfigModule } from '@nestjs/config';
import { BlogImageService } from './blog-image/blog-image.service';
import { BlogImageModule } from './blog-image/blog-image.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    AuthModule, PrismaModule, AdminModule, BlogImageModule],
  controllers: [AppController],
  providers: [AppService, PrismaService, BlogImageService],
})
export class AppModule { }
