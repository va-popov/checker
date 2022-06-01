"use strict";
/*
    В данном файле описан класс User, используемый для описания полей пользователя ресурса.

    Одновременно, данный класс является описанием модели данных таблицы Users в базе данных.

    allowNull:false - означает, что поле обязательное.
    unique: true    - означает, что поле должно быть уникальным.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.User = void 0;
var swagger_1 = require("@nestjs/swagger");
var sequelize_typescript_1 = require("sequelize-typescript");
var user_roles_model_1 = require("../roles/user-roles.model");
var roles_model_1 = require("../roles/roles.model");
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, swagger_1.ApiProperty)({ example: "1", description: "Уникальный идентификатор" })
        //оборачиваем строку в декоратор, чтобы она стала в итоге колонкой
        ,
        (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    ], User.prototype, "id");
    __decorate([
        (0, swagger_1.ApiProperty)({ example: "login", description: "Уникальный никнейм пользователя" }),
        (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, unique: true, allowNull: false })
    ], User.prototype, "login");
    __decorate([
        (0, swagger_1.ApiProperty)({ example: "password123", description: "Секретный пароль пользователя" }),
        (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
    ], User.prototype, "password");
    __decorate([
        (0, swagger_1.ApiProperty)({ example: "Имя", description: "Имя пользователя" }),
        (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
    ], User.prototype, "name");
    __decorate([
        (0, swagger_1.ApiProperty)({ example: "Фамилия", description: "Фамилия пользователя" }),
        (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
    ], User.prototype, "surname");
    __decorate([
        (0, swagger_1.ApiProperty)({ example: "+71234567890", description: "Телефон пользователя" }),
        (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, defaultValue: null })
    ], User.prototype, "phone");
    __decorate([
        (0, swagger_1.ApiProperty)({ example: "temp@email.com", description: "Электронная почта пользователя" }),
        (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, defaultValue: "" })
    ], User.prototype, "email");
    __decorate([
        (0, sequelize_typescript_1.BelongsToMany)(function () { return roles_model_1.Role; }, function () { return user_roles_model_1.UserRoles; }) //декоратор для связочной таблицы user_roles.
    ], User.prototype, "roles");
    User = __decorate([
        (0, sequelize_typescript_1.Table)({ tableName: 'users' }) //оборачиваем класс в декоратор, чтобы он стал в итоге таблицей
    ], User);
    return User;
}(sequelize_typescript_1.Model));
exports.User = User;
