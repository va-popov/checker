"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var common_1 = require("@nestjs/common");
var sequelize_1 = require("@nestjs/sequelize");
var users_module_1 = require("./users/users.module");
var config_1 = require("@nestjs/config");
var users_model_1 = require("./users/users.model");
var roles_module_1 = require("./roles/roles.module");
var roles_model_1 = require("./roles/roles.model");
var user_roles_model_1 = require("./roles/user-roles.model");
var auth_module_1 = require("./auth/auth.module");
var files_module_1 = require("./files/files.module");
var path = require("path");
var serve_static_1 = require("@nestjs/serve-static");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        (0, common_1.Module)({
            controllers: [],
            providers: [],
            imports: [
                config_1.ConfigModule.forRoot({
                    envFilePath: '.' + process.env.NODE_ENV + '.env'
                }),
                serve_static_1.ServeStaticModule.forRoot({
                    rootPath: path.resolve(__dirname, 'static')
                }),
                sequelize_1.SequelizeModule.forRoot({
                    dialect: 'mysql',
                    host: process.env.MYSQL_HOST,
                    port: Number(process.env.MYSQL_PORT),
                    username: process.env.MYSQL_USER,
                    password: process.env.MYSQL_PASSWORD,
                    database: process.env.MYSQL_DB,
                    models: [users_model_1.User, roles_model_1.Role, user_roles_model_1.UserRoles],
                    autoLoadModels: true
                }),
                users_module_1.UsersModule,
                roles_module_1.RolesModule,
                auth_module_1.AuthModule,
                files_module_1.FilesModule,
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
