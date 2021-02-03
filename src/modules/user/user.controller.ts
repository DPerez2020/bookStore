import { UserService } from './user.service';
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { User } from './user.entity';
import { UserDetail } from './user.details.entity';
import { getConnection } from 'typeorm';
import { Role } from '../role/role.entity';

@Controller('users')
export class UserController {
    constructor(private readonly _userService:UserService){}

    @Get(':id')
    async getUser(@Param('id',ParseIntPipe) id:number):Promise<UserDto>{
        const user:UserDto= await this._userService.get(id);
        return user;
    }
    @Get()
    async getUsers():Promise<UserDto[]>{
        const users:UserDto[]=await this._userService.getAll();
        return users;
    }

    @Post('create')
    async createUser(@Body() user:User):Promise<UserDto>{
        
        const userDetail=new UserDetail();
        user.detail=userDetail;

        const repo=await getConnection().getRepository(Role);
        const defaultRole= await repo.findOne({where:{id:1}});
        
        user.roles=[defaultRole]
        const createdUser=await this._userService.create(user);
        return createdUser;
    }

    @Patch(":id")
    async updateUser(@Param('id',ParseIntPipe) id:number,@Body() user:User):Promise<boolean>{
        const updatedUser=await this._userService.update(id,user);
        return true;
    }
    @Delete(':id')
    async deleteUser(@Param('id',ParseIntPipe) id:number):Promise<boolean> {
        await this._userService.delete(id);
        return true;
    }
}
