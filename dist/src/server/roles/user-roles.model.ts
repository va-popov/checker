import {Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {Role} from "./roles.model";
import {User} from "../users/users.model";
import {ApiProperty} from "@nestjs/swagger";

@Table({tableName: 'user_roles', createdAt: false, updatedAt:false}) //оборачиваем класс в декоратор, чтобы он стал в итоге таблицей
export class UserRoles extends Model<UserRoles> {

    //Этот декоратор нам нужен для создания красивой документации Swagger
    @ApiProperty({example: "1", description: "Уникальный идентификатор"})
    //оборачиваем строку в декоратор, чтобы она стала в итоге колонкой
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ForeignKey(()=> Role)
    @Column({type: DataType.INTEGER})
    roleId: number;

    @ForeignKey(()=> User)
    @Column({type: DataType.INTEGER})
    userId: number;
}