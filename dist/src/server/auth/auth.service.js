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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const users_service_1 = require("../users/users.service");
const bcrypt = require("bcryptjs");
const users_model_1 = require("../users/users.model");
let AuthService = class AuthService {
    constructor(usersService, jwtService) {
        this.usersService = usersService;
        this.jwtService = jwtService;
    }
    ;
    async login(userDto) {
        const user = await this.validateUser(userDto);
        return this.generateToken(user);
    }
    ;
    async registration(userDto) {
        const candidate = await this.usersService.getUserByEmail(userDto.email);
        if (candidate) {
            throw new common_1.HttpException("Пользователь с таким email уже существует", common_1.HttpStatus.BAD_REQUEST);
        }
        const hashPassword = await bcrypt.hash(userDto.password, 5);
        const user = await this.usersService.createUser(Object.assign(Object.assign({}, userDto), { password: hashPassword }));
        return this.generateToken(user);
    }
    ;
    async generateToken(user) {
        const payload = { email: user.email, id: user.id, roles: user.roles };
        return {
            token: this.jwtService.sign(payload)
        };
    }
    ;
    async validateUser(userDto) {
        const user = await this.usersService.getUserByEmail(userDto.email);
        if (user) {
            const passwordEquals = await bcrypt.compare(userDto.password, user.password);
            if (passwordEquals) {
                return user;
            }
            throw new common_1.UnauthorizedException({ message: "Некорректный пароль" });
        }
        throw new common_1.UnauthorizedException({ message: "Некорректный емайл" });
    }
    ;
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
;
//# sourceMappingURL=auth.service.js.map