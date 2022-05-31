/*
    Модуль управления пользователями, ха-ха.

    Здесь описаны возможности создания пользователей, ролей, получения пользователей и их ролей, раздача ролей.
 */

import {Body, Controller, Get, Post, UseGuards, UsePipes} from '@nestjs/common';
import {UsersService} from "./users.service";
import {CreateUserDto} from "./dto/create-user.dto";
import {ApiOperation, ApiResponse, ApiTags} from '@nestjs/swagger';
import {User} from './users.model';
import {JwtAuthGuard} from "../auth/jwt-auth.guard";
import {Roles} from "../auth/roles-auth.decorator";
import {RolesGuard} from "../auth/roles.guard";
import {AddRoleDto} from "./dto/add-role.dto";
import {BanUserDto} from "./dto/ban-user.dto";
import {ValidationPipe} from "../pipes/validation.pipe";


@ApiTags("Пользователи")
@Controller('users')
export class UsersController {

    // Класс UsersService описан в ./users.service.ts
    constructor(private usersService: UsersService){}

    @ApiOperation( {summary: 'Создание объекта'} )
    @ApiResponse({status: 200, type: User})
    @Post()
    create(@Body() userDto: CreateUserDto){

        return this.usersService.createUser(userDto);
    }

    @ApiOperation( {summary: 'Получение всех объектов'} )
    @ApiResponse({status: 200, type: [User]})
    @Roles("ADMIN") // этот декоратор означает, что право на использование данного метода имеет только админ.
    @UseGuards(RolesGuard) // декоратор означает, что используется защита - только для авторизованых пользователей.
    @Get()
    getAll(){
        return this.usersService.getAllUsers();
    }

    @ApiOperation( {summary: 'Выдача ролей'} )
    @ApiResponse({status: 200})
    @Roles("ADMIN")// этот декоратор означает, что право на использование данного метода имеет только админ.
    @UseGuards(RolesGuard) // декоратор означает, что используется защита - только для авторизованых пользователей.
    @Post('/role')
    addRole(@Body() dto: AddRoleDto){
        return this.usersService.addRole(dto);
    }

    @ApiOperation( {summary: 'Забанить пользователей'} )
    @ApiResponse({status: 200})
    @Roles("ADMIN") // этот декоратор означает, что право на использование данного метода имеет только админ.
    @UseGuards(RolesGuard) // декоратор означает, что используется защита - только для авторизованых пользователей.
    @Post('/ban')
    ban(@Body() dto: BanUserDto){
        return this.usersService.banUser(dto);
    }

    @Get("/profile")
    @UseGuards(RolesGuard)
    @Roles("ADMIN", "USER")
    async getProfile(@Body() userDto: CreateUserDto){
        return this.usersService.getUserByEmail(userDto.email);
    }
}
