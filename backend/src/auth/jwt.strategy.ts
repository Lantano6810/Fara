import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private configService: ConfigService) {
        const jwtSecret = configService.get<string>('JWT_SECRET');

        if (!jwtSecret) {
            throw new Error('❌ JWT_SECRET не найден в .env файле');
        }

        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: jwtSecret, // ✅ Теперь 100% передаем `JWT_SECRET`
        });
    }

    async validate(payload: any) {
        if (!payload) {
            throw new UnauthorizedException('❌ Токен недействителен');
        }
        return { id: payload.sub, email: payload.email, role: payload.role };
    }
}