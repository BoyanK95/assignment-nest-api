import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { AuthController } from './auth.contoller';
import { UserModule } from 'src/users/user.module';
import { LocalStrategy } from './local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jsw.strategy';

@Module({
    imports: [
        PassportModule,
        UserModule,
        JwtModule.register({
            secret: 'random_secret_key',
            signOptions: {expiresIn: '12h'}
        })
    ],
    providers: [
        AuthService,
        LocalStrategy,
        JwtStrategy
    ],
    controllers: [AuthController],
})
export class AuthModule {}