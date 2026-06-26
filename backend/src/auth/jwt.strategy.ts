import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Request } from "express";
import { Strategy } from "passport-jwt";
import { PrismaService } from "../prisma/prisma.service";


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
    constructor(private prisma: PrismaService) {
        super({
            jwtFromRequest: (req: Request) => {
                return req?.cookies?.['token'] || null
            },
            ignoreExpiration: false,
            secretOrKey: process.env.JWT_SECRET!
        })
    }

    async validate(payload: any) {
        const user = await this.prisma.admin.findUnique({ where: { id: payload.sub } })

        if (!user) throw new UnauthorizedException()
        return { id: user.id, username: user.username }
    }
}