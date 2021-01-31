import { User } from './../user/user.entity';
import { BaseEntity, Column, Entity, JoinColumn, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('Roles')
export class Role extends BaseEntity{

    @PrimaryGeneratedColumn("increment")
    id:number

    @Column({type:'varchar',length:20, nullable:false})
    nombre:string

    @Column({type:'text',nullable:false})
    descripcion:string

    @ManyToMany(type=>User,user=>user.roles)
    @JoinColumn({name:"user_role"})
    users:User[]

    @Column({type:'bit',nullable:false,default:1})
    status:boolean

    @Column({type:'timestamp',name:'created_at'})
    createdAd:Date

    @Column({type:'timestamp',name:'update_at'})
    updateAt:Date
}