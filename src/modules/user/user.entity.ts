import { UserDetail } from './user.details.entity';
import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Role } from '../role/role.entity';

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

    @OneToOne(type=>UserDetail,{cascade:true,nullable:false,eager:true})
    @JoinColumn({name:"detail_id"})
    detail:UserDetail

    @ManyToMany(type=>Role,role=>role.users)
    @JoinColumn()
    roles:Role[]

    @Column({type:'bit',nullable:false,default:1})
    status:number

    @CreateDateColumn({type:'timestamp',name:'created_at'})
    createdAd:Date

    @UpdateDateColumn({type:'timestamp',name:'update_at'})
    updateAt:Date

}