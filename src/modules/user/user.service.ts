import { User } from './user.entity';
import { MapperService } from './../../shared/mapper.service';
import { UserRepository } from './user.repository';
import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UserService {
    
    constructor(
        @InjectRepository(UserRepository)
        private readonly _userRepository:UserRepository,
        private readonly _mapperService:MapperService
    ) {
    }

    async get(id:number):Promise<UserDto>{
        if (!id) {
            throw new BadRequestException("No se ha enviado el Id");
        }
        
        const user:User=await this._userRepository.findOne(id,{where:{status:1}});

        if(!user){
            throw new NotFoundException("El usuario no existe");
        }
        return this._mapperService.map<User,UserDto>(user,new UserDto());
    }

    async getAll():Promise<UserDto[]>{
        
        const user:User[]=await this._userRepository.find({where:{status:1}});

        return this._mapperService.mapCollection<User,UserDto>(user,new UserDto());
    }

    async create(user:User):Promise<UserDto>{
        const saveUser=await this._userRepository.save(user);
        return this._mapperService.map<User,UserDto>(saveUser,new UserDto());
    }

    async update(id:number,user:User):Promise<void>{
        if (!id) {
            throw new BadRequestException("El id no es valido");
        }
        await this._userRepository.update(id,user);
    }
    async delete (id:number):Promise<void>{
        if (!id) {
            throw new BadRequestException("El id no es valido");
        }
        const userExist:User=await this._userRepository.findOne(id);
        if (!userExist) {
            throw new NotFoundException("El usuario no existe");
        }
        await this._userRepository.update(userExist.id,{status:0})
    }
}
