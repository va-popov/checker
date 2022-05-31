/*
 Модуль, отвечающий за авторизацию.
 Реализованы методы регистрации пользователей и авторизации.

 При регистрации используется модель пользователя, которую можно посмотреть в ../users/users.model.ts.
 При регистрации пользователю автоматически дается роль USER.

 При авторизации пользователей происходит проверка его существования, затем проверка его парол (сверяются хэши).
 */



import {Body, Controller, Get, Post} from '@nestjs/common';
import {ApiOperation, ApiResponse, ApiTags} from '@nestjs/swagger';
import {CreateUserDto} from "../users/dto/create-user.dto";
import {AuthService} from "./auth.service";
import {User} from "../users/users.model";

@ApiTags('Авторизация')
@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService){}

    @ApiOperation( {summary: 'Авторизация пользователя'} )
    @ApiResponse({status: 200, type: User})
    @Post('/login')
    async login(@Body() userDto: CreateUserDto){
        return this.authService.login(userDto);
    }

    @ApiOperation( {summary: 'Регистрация пользователя'} )
    @ApiResponse({status: 200, type: User })
    @Post('/registration')
    async registration(@Body() userDto: CreateUserDto){
        return this.authService.registration(userDto);
    }
}
