import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import * as bcrypt from 'bcrypt'

@Injectable()
export class AdminService {
  constructor(private prisma: PrismaService) { }

  async create(createAdminDto: CreateAdminDto) {
    const existing = await this.prisma.admin.findUnique({ where: { username: createAdminDto.username } })
    if (existing) throw new ConflictException(`username already exists`)

    const hashPassword = await bcrypt.hash(createAdminDto.password, 10)

    return await this.prisma.admin.create({
      data: {
        ...createAdminDto,
        password: hashPassword
      },
      select: {
        id: true,
        username: true,
      }
    });
  }
}
