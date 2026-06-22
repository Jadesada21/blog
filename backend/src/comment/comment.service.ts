import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCommentDto } from './dto/create-comment.dto';

@Injectable()
export class CommentService {
    constructor(private prisma: PrismaService) { }

    async addComment(blogId: number, createCommentDto: CreateCommentDto) {
        const blog = await this.prisma.blog.findUnique({ where: { id: blogId } })
        if (!blog || !blog.isPublished) {
            throw new NotFoundException(`Blog id ${blogId} not found or not published`)
        }

        return this.prisma.comment.create({
            data: {
                blogId,
                commentName: createCommentDto.commentName,
                message: createCommentDto.message
            }
        })
    }

    async updateApproved(id: number, isApproved: boolean) {
        const comment = await this.prisma.comment.findUnique({ where: { id } })
        if (!comment) {
            throw new NotFoundException(`Comment id ${id} not found`)
        }
        return this.prisma.comment.update({
            where: { id },
            data: { isApproved },
        })
    }
}
