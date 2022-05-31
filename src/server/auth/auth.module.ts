import {forwardRef, Module} from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import {UsersModule} from "../users/users.module";
import {JwtModule} from '@nestjs/jwt';

@Module({
    controllers: [AuthController],
    providers: [AuthService],
    imports:[
        // Дабы избежать циклических ссылок UserModule и AuthModule друг на друга.
        forwardRef(()=> UsersModule),
        JwtModule.register({
            secret: process.env.PRIVATE_KEY || "SECRET",
            signOptions: {
              expiresIn: '24h'
            }
        })
    ],
    exports: [
        AuthService,
        JwtModule
    ]

})
export class AuthModule {}
