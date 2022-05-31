/*
    В данном файле описан класс User, используемый для описания полей пользователя ресурса.

    Одновременно, данный класс является описанием модели данных таблицы Users в базе данных.

    allowNull:false - означает, что поле обязательное.
    unique: true    - означает, что поле должно быть уникальным.
 */


import {ApiProperty} from "@nestjs/swagger";
import {BelongsToMany, Column, DataType, Model, Table} from "sequelize-typescript";
import {UserRoles} from "../roles/user-roles.model";
import {Role} from "../roles/roles.model";

interface UserCreationAttrs {
    login:string;
    password:string;

    name:string;
    surname:string;

    phone: number;
    email: string;

}


@Table({tableName: 'users'}) //оборачиваем класс в декоратор, чтобы он стал в итоге таблицей
export class User extends Model<User, UserCreationAttrs >{


    @ApiProperty({example: "1", description: "Уникальный идентификатор"})
    //оборачиваем строку в декоратор, чтобы она стала в итоге колонкой
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: "login", description: "Уникальный никнейм пользователя"})
    @Column({type: DataType.STRING, unique: true, allowNull:false})
    login: string;

    @ApiProperty({example: "password123", description: "Секретный пароль пользователя"})
    @Column({type: DataType.STRING, allowNull:false})
    password: string;

    @ApiProperty({example: "Имя", description: "Имя пользователя"})
    @Column({type: DataType.STRING, allowNull:false})
    name: string;

    @ApiProperty({example: "Фамилия", description: "Фамилия пользователя"})
    @Column({type: DataType.STRING, allowNull:false})
    surname: string;


    @ApiProperty({example: "+71234567890", description: "Телефон пользователя"})
    @Column({type: DataType.INTEGER, defaultValue: null})
    phone: number;

    @ApiProperty({example: "temp@email.com", description: "Электронная почта пользователя"})
    @Column({type: DataType.STRING, defaultValue: ""})
    email: string;


    @BelongsToMany(()=> Role, ()=> UserRoles) //декоратор для связочной таблицы user_roles.
    roles: Role[];
}