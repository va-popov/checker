import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {RolesService} from "./roles.service";
import {ApiOperation, ApiResponse, ApiTags} from '@nestjs/swagger';
import {CreateRoleDto} from './dto/create-role.dto';
import {Role} from "./roles.model";


@ApiTags("Роли")
@Controller('roles')
export class RolesController {
    constructor(private roleService: RolesService){}

    @ApiOperation( {summary: 'Создание объекта'} )
    @ApiResponse({status: 200, type: Role})
    @Post()
    create(@Body() roleDto: CreateRoleDto){
        return this.roleService.createRole(roleDto);
    }

    @ApiOperation( {summary: 'Получение всех объектов'} )
    @ApiResponse({status: 200, type: Role})
    @Get('/:value')
    getByValue(@Param('value') value: string){
        return this.roleService.getRoleByValue(value);
    }
}
