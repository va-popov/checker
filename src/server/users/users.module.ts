import {forwardRef, Module} from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import {SequelizeModule} from '@nestjs/sequelize'
import {User} from "./users.model";
import {Role} from "../roles/roles.model";
import {UserRoles} from "../roles/user-roles.model";
import {RolesModule} from "../roles/roles.module";
import {AuthModule} from "../auth/auth.module";

@Module({
    providers: [UsersService],
    controllers: [UsersController],
    imports: [
        // Дабы избежать циклических ссылок UserModule и AuthModule друг на друга.
        SequelizeModule.forFeature([User, Role, UserRoles]),
        RolesModule,
        forwardRef(()=> AuthModule)
    ],
    exports: [
        UsersService
    ]
})
export class UsersModule {}
