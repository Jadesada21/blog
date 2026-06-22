import { Body, Controller, Delete, Param, Post, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { BlogImageService } from './blog-image.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { imageUploadOptions } from '../common/multer-config';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('blog-image')
@UseGuards(JwtAuthGuard)
export class BlogImageController {
    constructor(private readonly blogImageService: BlogImageService) { }

    @Post(':id/images')
    @UseInterceptors(FileInterceptor('image', imageUploadOptions))
    addImage(@Param('id') id: number, @UploadedFile() file: Express.Multer.File) {
        return this.blogImageService.addImage(+id, file)
    }

    @Delete(':id/images/:imageId')
    removeImage(@Param('id') id: number, @Param('imageId') imageId: number) {
        return this.blogImageService.removeImage(+id, imageId)
    }
}
