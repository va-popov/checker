import {ApiProperty} from "@nestjs/swagger";
import {BelongsToMany, Column, DataType, Model, Table} from "sequelize-typescript";
import {UserRoles} from "./user-roles.model";
import {User} from "../users/users.model";

interface RoleCreationAttrs {
    value:string;
    description:string;
}


@Table({tableName: 'roles'}) //оборачиваем класс в декоратор, чтобы он стал в итоге таблицей
export class Role extends Model<Role, RoleCreationAttrs >{

    //Этот декоратор нам нужен для создания красивой документации Swagger
    @ApiProperty({example: "1", description: "Уникальный идентификатор"})
    //оборачиваем строку в декоратор, чтобы она стала в итоге колонкой
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: "ADMIN", description: "Уникальная роль пользователя"})
    @Column({type: DataType.STRING, unique: true, allowNull:false})
    value: string;

    @ApiProperty({example: "Администратор", description: "Описание роли пользователя"})
    @Column({type: DataType.STRING, allowNull:false})
    description: string;


    @BelongsToMany(()=> User, ()=> UserRoles)
    users: User[];
}