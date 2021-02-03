import { User } from './../user/user.entity';
import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('Roles')
export class Role extends BaseEntity{

    @PrimaryGeneratedColumn("increment")
    id:number

    @Column({type:'varchar',length:20, nullable:false})
    nombre:string

    @Column({type:'text',nullable:false})
    descripcion:string

    @ManyToMany(type=>User,user=>user.roles)
    @JoinTable({name:"user_role"})
    users:User[]

    @Column({type:'bit',nullable:false,default:1})
    status:number

    @CreateDateColumn({type:'timestamp',name:'created_at'})
    createdAd:Date

    @UpdateDateColumn({type:'timestamp',name:'update_at'})
    updateAt:Date
}