import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('users_details')
export class UserDetail extends BaseEntity{
    @PrimaryGeneratedColumn('increment')
    id:number;

    @Column({type:'varchar',length:50,nullable:true})
    name:string

    @Column({type:'varchar',nullable:true,length:50})
    lastname:string

    @Column({type:'bit',nullable:true,default:1,})
    status:number

    @CreateDateColumn({type:'timestamp',name:'created_at'})
    createdAd:Date

    @UpdateDateColumn({type:'timestamp',name:'update_at'})
    updateAt:Date

}