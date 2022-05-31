"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RolesGuard = void 0;
var common_1 = require("@nestjs/common");
var roles_auth_decorator_1 = require("./roles-auth.decorator");
var RolesGuard = /** @class */ (function () {
    function RolesGuard(jwtService, reflector) {
        this.jwtService = jwtService;
        this.reflector = reflector;
    }
    RolesGuard.prototype.canActivate = function (context) {
        var req = context.switchToHttp().getRequest();
        try {
            var requiredRoles_1 = this.reflector.getAllAndOverride(roles_auth_decorator_1.ROLES_KEY, [
                context.getHandler(),
                context.getClass()
            ]);
            if (!requiredRoles_1) {
                return true;
            }
            var authHeader = req.headers.authorization;
            var bearer = authHeader.split(' ')[0];
            var token = authHeader.split(' ')[1];
            if (bearer !== 'Bearer' || !token) {
                throw new common_1.UnauthorizedException({ message: "Пользователь не авторизован" });
            }
            var user = this.jwtService.verify(token);
            req.user = user;
            console.log(user.roles);
            return user.roles.some(function (role) { return requiredRoles_1.includes(role.value); });
        }
        catch (e) {
            throw new common_1.HttpException("Нет доступа", common_1.HttpStatus.FORBIDDEN);
        }
    };
    RolesGuard = __decorate([
        (0, common_1.Injectable)()
    ], RolesGuard);
    return RolesGuard;
}());
exports.RolesGuard = RolesGuard;
