/*
 В данном файле реализован класс AuthService, наследуемый при регистрации и авторизации.

 Методы данного класса используются при регистрации, в контроллере.
 */


import {Body, Get, HttpException, HttpStatus, Injectable, Post, UnauthorizedException} from '@nestjs/common';
import {JwtModule, JwtService} from '@nestjs/jwt';
import {CreateUserDto} from "../users/dto/create-user.dto";
import {UsersService} from "../users/users.service";
import * as bcrypt from 'bcryptjs';
import {User} from 'src/server/users/users.model';


@Injectable()
export class AuthService {

    constructor(private usersService: UsersService,
                private jwtService: JwtService){};

    // Метод входа зарегистрированного пользователя в личный кабинет
    async login(userDto: CreateUserDto){

        const user = await this.validateUser(userDto);

        return this.generateToken(user);
    };


    // Метод регистрации нового пользователя.
    // Сначала имеем кандидата в новые пользователи. Если на емайл уже регистрировались, то кидаем ошибку.
    // Иначе, создаем нового пользователя. Пароль хэшируется, в базу добавляется уже зашифрованный пароль.
    async registration(userDto: CreateUserDto){

        const candidate = await this.usersService.getUserByEmail(userDto.email);
        if(candidate){
            throw new HttpException("Пользователь с таким email уже существует", HttpStatus.BAD_REQUEST);
        }

        const hashPassword = await bcrypt.hash(userDto.password, 5);
        const user = await this.usersService.createUser({...userDto, password: hashPassword});

        return this.generateToken(user);
    };

    // Метод генерации JWT-токена
    private async generateToken(user: User){
        const payload = {email: user.email, id: user.id, roles: user.roles};
        return {
            token: this.jwtService.sign(payload)
        };

    };

    // Метод валидации пользователя, а именно проверки его существования, совпадения паролей
    private async validateUser(userDto: CreateUserDto){

        const user = await this.usersService.getUserByEmail(userDto.email);

        if(user){
            const passwordEquals = await bcrypt.compare(userDto.password, user.password);

            if(passwordEquals){
                return user;
            }
            throw new UnauthorizedException({message: "Некорректный пароль"});

        }
        throw new UnauthorizedException({message: "Некорректный емайл"});

    };
};
