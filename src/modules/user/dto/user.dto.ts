import { RoleType } from './../../role/roletype.enum';
import { isNotEmpty, IsNotEmpty } from "class-validator";
import { UserDetail } from '../user.details.entity';

export class UserDto {
    @IsNotEmpty()
    id:number;

    @IsNotEmpty()
    username:string;

    @IsNotEmpty()
    email:string;

    @IsNotEmpty()
    roles:RoleType

    @IsNotEmpty()
    details:UserDetail
}