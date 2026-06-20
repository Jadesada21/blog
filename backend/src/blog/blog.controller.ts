import { Controller, Get, Post, Body, Patch, Param, Query, UseInterceptors, UploadedFile } from '@nestjs/common';
import { BlogService } from './blog.service';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdatePublishedDto } from './dto/published-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('blog')
export class BlogController {
  constructor(private readonly blogService: BlogService) { }

  @Post()
  create(@Body() createBlogDto: CreateBlogDto) {
    return this.blogService.create(createBlogDto);
  }

  @Get()
  findAll(@Query('page') page?: string) {
    return this.blogService.findAll(page ? parseInt(page, 10) : 1);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.blogService.findOne(+id);
  }

  @Patch(':id/update')
  update(@Param('id') id: number, updateBlogDto: UpdateBlogDto) {
    return this.blogService.update(+id, updateBlogDto)
  }

  @Patch(':id/cover')
  @UseInterceptors(FileInterceptor('coverImage'))
  updateCoverImage(@Param('id') id: number, @UploadedFile() file: Express.Multer.File) {
    return this.blogService.updateCoverImage(+id, file)
  }

  @Patch(':id/toggle')
  togglePublished(@Param('id') id: number, @Body() updatePublishedDto: UpdatePublishedDto) {
    return this.blogService.togglePublished(+id, updatePublishedDto);
  }

  @Patch(':id')
  softDelete(@Param('id') id: number) {
    return this.blogService.softDelete(+id)
  }

  @Patch(':id/restore')
  restore(@Param('id') id: number) {
    return this.blogService.restore(+id)
  }
}
