"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateUserDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: "login", description: "Уникальный никнейм пользователя" }),
    (0, class_validator_1.IsString)({ message: "Должен быть строкой" }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "login", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "password123", description: "Секретный пароль пользователя" }),
    (0, class_validator_1.IsString)({ message: "Должен быть строкой" }),
    (0, class_validator_1.Length)(4, 16, { message: "Должен быть не менее 4 и не более 16 символов" }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "Имя", description: "Имя пользователя" }),
    (0, class_validator_1.IsString)({ message: "Должно быть строкой" }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "Фамилия", description: "Фамилия пользователя" }),
    (0, class_validator_1.IsString)({ message: "Должна быть строкой" }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "surname", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "+71234567890", description: "Телефон пользователя" }),
    (0, class_validator_1.IsPhoneNumber)(undefined, { message: "Должен быть введен телефон" }),
    __metadata("design:type", Number)
], CreateUserDto.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "temp@email.com", description: "Электронная почта пользователя" }),
    (0, class_validator_1.IsEmail)({}, { message: "Некорректный емайл" }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "email", void 0);
exports.CreateUserDto = CreateUserDto;
//# sourceMappingURL=create-user.dto.js.map