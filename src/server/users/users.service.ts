import {InjectModel} from "@nestjs/sequelize";
import {HttpException, HttpStatus, Injectable} from "@nestjs/common";
import {User} from "./users.model";
import {CreateUserDto} from "./dto/create-user.dto";
import {RolesService} from "../roles/roles.service";
import {AddRoleDto} from "./dto/add-role.dto";
import {BanUserDto} from "./dto/ban-user.dto";

@Injectable()
export class UsersService {

    // внутри сервиса нам понадобиться использовать модель, поэтому внедрим ее
    constructor(@InjectModel(User) private userRepository: typeof User,
                private roleService: RolesService) {

    }

    async createUser(dto: CreateUserDto){
        try {
            const user = await this.userRepository.create(dto);
            console.log('success', user.toJSON());
            const role = await this.roleService.getRoleByValue("USER");
            await user.$set('roles', [role.id]);
            user.roles = [role];

            return user;

        } catch (err) {
            // print the error details
            console.log(err);
        }


    }

    async getAllUsers(){
        const users = await this.userRepository.findAll({include: {all:true}});
        return users;
    }

    async getUserByEmail(email: string){
        const user = await this.userRepository.findOne({where: {email}, include: {all: true}});
        return user;
    }

    async addRole(dto: AddRoleDto){

        const user = await this.userRepository.findByPk(dto.userId);
        const role = await this.roleService.getRoleByValue(dto.value);

        if(role && user){
            await user.$add('role', role.id);

            return dto;
        }
        throw new HttpException('Пользователи или роль не найдены', HttpStatus.NOT_FOUND);

    }

    async banUser(dto: BanUserDto){
        // функционал реализуется при необходимости
        // для реализации необходимо изменить userDto (добавить поле banned)
        throw new HttpException('Метод пока не реализован, но мы работаем над этим', HttpStatus.NOT_FOUND);
    }
}
