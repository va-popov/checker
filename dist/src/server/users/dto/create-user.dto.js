"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CreateUserDto = void 0;
var swagger_1 = require("@nestjs/swagger");
var class_validator_1 = require("class-validator");
var CreateUserDto = /** @class */ (function () {
    function CreateUserDto() {
    }
    __decorate([
        (0, swagger_1.ApiProperty)({ example: "login", description: "Уникальный никнейм пользователя" }),
        (0, class_validator_1.IsString)({ message: "Должен быть строкой" })
    ], CreateUserDto.prototype, "login");
    __decorate([
        (0, swagger_1.ApiProperty)({ example: "password123", description: "Секретный пароль пользователя" }),
        (0, class_validator_1.IsString)({ message: "Должен быть строкой" }),
        (0, class_validator_1.Length)(4, 16, { message: "Должен быть не менее 4 и не более 16 символов" })
    ], CreateUserDto.prototype, "password");
    __decorate([
        (0, swagger_1.ApiProperty)({ example: "Имя", description: "Имя пользователя" }),
        (0, class_validator_1.IsString)({ message: "Должно быть строкой" })
    ], CreateUserDto.prototype, "name");
    __decorate([
        (0, swagger_1.ApiProperty)({ example: "Фамилия", description: "Фамилия пользователя" }),
        (0, class_validator_1.IsString)({ message: "Должна быть строкой" })
    ], CreateUserDto.prototype, "surname");
    __decorate([
        (0, swagger_1.ApiProperty)({ example: "+71234567890", description: "Телефон пользователя" }),
        (0, class_validator_1.IsPhoneNumber)(undefined, { message: "Должен быть введен телефон" })
    ], CreateUserDto.prototype, "phone");
    __decorate([
        (0, swagger_1.ApiProperty)({ example: "temp@email.com", description: "Электронная почта пользователя" }),
        (0, class_validator_1.IsEmail)({}, { message: "Некорректный емайл" })
    ], CreateUserDto.prototype, "email");
    return CreateUserDto;
}());
exports.CreateUserDto = CreateUserDto;
