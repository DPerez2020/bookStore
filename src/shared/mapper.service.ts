import { UserDto } from './../modules/user/dto/user.dto';
import { User } from './../modules/user/user.entity';
import { Injectable } from "@nestjs/common";
import { TypeMapper } from "ts-mapper";
import { Entity } from 'typeorm';

@Injectable()
export class MapperService extends TypeMapper {
    constructor() {
        super();
        this.config();
    }
    private config():void{
        this.createMap<User,UserDto>()
        .map(entity=>entity.id,dto=>dto.id)
        .map(entity=>entity.email,dto=>dto.email)
        .map(entity=>entity.username,dto=>dto.username)
        .map(entity=>entity.detail,dto=>dto.details)
        .map(entity=>entity.roles,dto=>dto.roles)
    }
}