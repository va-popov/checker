import {ApiProperty} from "@nestjs/swagger";
import {IsEmail, IsPhoneNumber, IsString, Length} from "class-validator";

export class CreateUserDto {

    @ApiProperty({example: "login", description: "Уникальный никнейм пользователя"})
    @IsString({message: "Должен быть строкой"})
    readonly login:string;

    @ApiProperty({example: "password123", description: "Секретный пароль пользователя"})
    @IsString({message: "Должен быть строкой"})
    @Length(4, 16, {message: "Должен быть не менее 4 и не более 16 символов"})
    readonly password:string;


    @ApiProperty({example: "Имя", description: "Имя пользователя"})
    @IsString({message: "Должно быть строкой"})
    readonly name:string;

    @ApiProperty({example: "Фамилия", description: "Фамилия пользователя"})
    @IsString({message: "Должна быть строкой"})
    readonly surname:string;

    @ApiProperty({example: "+71234567890", description: "Телефон пользователя"})
    @IsPhoneNumber(undefined, {message: "Должен быть введен телефон"})
    readonly phone: number;

    @ApiProperty({example: "temp@email.com", description: "Электронная почта пользователя"})
    @IsEmail({}, {message: "Некорректный емайл"})
    readonly email: string;
}