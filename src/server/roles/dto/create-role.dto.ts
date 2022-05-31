import {ApiProperty} from "@nestjs/swagger";
import {Column, DataType} from "sequelize-typescript";


export class CreateRoleDto {

    @ApiProperty({example: "ADMIN", description: "Уникальная роль пользователя"})
    readonly value: string;

    @ApiProperty({example: "Администратор", description: "Описание роли пользователя"})
    readonly description:string;
}