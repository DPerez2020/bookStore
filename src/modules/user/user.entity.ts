import { timeStamp } from "console";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class User extends BaseEntity{
    @PrimaryGeneratedColumn('increment')
    id:number;

    @Column({type:'varchar',unique:true,length:25,nullable:false})
    username:string

    @Column({type:'varchar',unique:true,nullable:false})
    email:string

    @Column({type:'varchar',nullable:false})
    password:string

    @Column({type:'bit',nullable:false,default:1})
    status:boolean

    @Column({type:'timestamp',name:'created_at'})
    createdAd:Date

    @Column({type:'timestamp',name:'update_at'})
    updateAt:Date

}